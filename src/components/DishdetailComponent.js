import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle} from 'reactstrap';

function RenderDish({dishSelected})
    {
        if(dishSelected != null)
        return(
            <Card key = {dishSelected.id}>
                <CardImg top  src = {dishSelected.image} alt = {dishSelected.name} />
                <CardBody>
                            <CardTitle> { dishSelected.name } </CardTitle>
                            <CardText> { dishSelected.description } </CardText>
                </CardBody>
            </Card>
            );
        else
        return(
            <div></div>
        );
      
    }

function RenderComments({dishSelected})
    {    
        if(dishSelected.comments != null){
            const comm = dishSelected.comments.map((i) => {
                return(
                    <div >   
                        <ul class = "list-unstyled">
                            <li> {i.comment}</li>
                            <li>-- {i.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(i.date)))} </li>
                        </ul> 
                    </div>
                );
    
            });
            return(
                <div>
                    <Card key = {dishSelected.id} >
                        <h4> Comments </h4>
                        {comm}
                    </Card>
                </div>

        );}
        else
        return(
            <div></div>
        )

    }

const DishDetail = (props) => {
        return(
         <div className = "container" >
                <div className = "row">
                    <div className = "col-12 col-md-5 m-1">
                        <RenderDish dishSelected = {props.dish} />
                    </div>  
                    <div className = "col-12 col-md-5 m-1">
                        <RenderComments dishSelected = {props.dish} />
                    </div>
                </div>
        </div>
        );
    }


export default DishDetail;