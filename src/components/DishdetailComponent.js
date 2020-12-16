import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle} from 'reactstrap';
import moment from 'moment';

class DishDetail extends Component{

    constructor(props)
    {
        super(props);
    }

    renderDish()
    {
        if(this.props.dish != null)
        return(
            <Card key = {this.props.dish.id}>
                <CardImg top  src = {this.props.dish.image} alt = {this.props.dish.name} />
                <CardBody>
                            <CardTitle> { this.props.dish.name } </CardTitle>
                            <CardText> { this.props.dish.description } </CardText>
                </CardBody>
            </Card>
            );
        else
        return(
            <div></div>
        );
      
    }

    renderComments()
    {
        const comm = this.props.comments.map((i) => {
            return(
                <div >   
                    <ul class = "list-unstyled">
                        <li> {i.comment}</li>
                        <li>-- {i.author} , {moment(i.date).format('MMM DD, YYYY')}</li>
                    </ul> 
                </div>
            );

        });

        return(
            <div>
                <Card key = {this.props.dish.id}>
                    <h4> Comments </h4>
                    {comm}
                </Card>
            </div>

        );
        // if (this.props.dish != null)
        // return(
                
        //             <Card key = {this.props.dish.id}>
        //                 <h4> Comments </h4>
                        
        //                     <CardBody>
        //                     <ul class = "list-unstyled">
        //                         <li> {}</li>
        //                     </ul>
        //                     <ul class = "list-inline">
        //                         <li class = "list-inline-item"> ---  </li>
        //                         <li class = "list-inline-item">{this.props.comments.author}</li>
        //                         <li class = "list-inline-item">{this.props.comments.date}</li>
        //                     </ul> 
        //                     </CardBody>
        //             </Card>      
        // );
        // else
        // return(
        //     <div></div>
        // );
    }

    render()
    {
        return(
         <div className = "container" >
                <div class = "row">
                    <div class = "col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>  
                    <div class = "col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
        </div>
        );
    }

}
export default DishDetail;