import {React, Component} from 'react';
import {Button, Modal, ModalBody, ModalHeader, Label, Row , Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isModalOpen:false
        }
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);

    }

    handleComment(values)
    {
        this.toggleModal();
        console.log("Current state is: " +JSON.stringify(values));
        alert("Current state is: " +JSON.stringify(values));

    }

    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render()
    {
        return(
        <div>
    
            <Button outline onClick = {this.toggleModal}>
                <span className = "fa fa-edit fa-lg"></span>
                Submit Comment
            </Button>
   
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
            <ModalHeader toggle = {this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                {
                    <div className = "col-12 col-md-9" >
                    <LocalForm onSubmit = {(values) => this.handleComment(values)}>
                        <Row className = "form-group">
                            <Label htmlFor = "rating" md={10}> Rating </Label>
                            <Col md = {10}  >
                                <Control.select className = "col-12 col-md-9" model = ".rating" id = "rating" name = "Rating" >
                                    <option value = "1">1</option>
                                    <option value = "2">2</option>
                                    <option value = "3">3</option>
                                    <option value = "4">4</option>
                                    <option value = "5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className = "form-group">
                            <Label htmlFor = "name" md={9}> Your Name </Label>
                            <Col md = {10}>
                                <Control.text className = "col-12 col-md-9" model = ".name" id = "name" name = "name" placeholder = "enter your name"
                                className = "form-control"
                                validators = {
                                    {
                                        required, minLength: minLength(3), maxLength:maxLength(15)
                                    }
                                }
                               />
                            <Errors 
                                className = "text-danger"
                                model = ".name"
                                show = "touched"
                                messages = {
                                    {
                                        required: 'required',
                                        minLength: 'must be greater than 2 char ',
                                        maxLength: 'must be less than or equal to 15 characters'
                                    }
                                }
                            />  
                            </Col>
                        </Row>
                        <Row className = "form-group">
                            <Label htmlFor = "message" md={3}> Comment </Label>
                            <Col md = {10}>
                                <Control.textarea className = "col-12 col-md-9"  model = ".message" id = "message" name = "message" 
                                rows = "6"
                                className = "form-control"
                                />
                            </Col>
                        </Row>
                        <Row className = "form-group">
                            <Col md = {{size:10, offset:2}}>
                                <Button type = "submit" color = "primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    
                </div>
                }
            </ModalBody>
            </Modal>
          
        </div>
        );
    }
}
export default CommentForm;
