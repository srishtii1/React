import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';  
function RenderDish({dish})
    {
        if(dish != null && dish !== undefined)
        return(
            <Card key = {dish.id}>
                <CardImg top  src = {dish.image} alt = {dish.name} />
                <CardBody>
                            <CardTitle> { dish.name } </CardTitle>
                            <CardText> { dish.description } </CardText>
                </CardBody>
            </Card>
            );
        else
        return(
            <div></div>
        );
      
    }

function RenderComments({comments})
    {    
        if(comments != null){
            const comm = comments.map((i) => {
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
                    <Card key = {comments.dishId} >
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
    if (props!= null)
        return(
         <div className = "container" >
            <div className = "row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to = '/menu'> Menu </Link> </BreadcrumbItem>
                    <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                </Breadcrumb>
                <div className = "col-12">
                    <h3> {props.dish.name} </h3>
                    <hr />
                </div>
            </div>
                <div className = "row">
                    <div className = "col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>  
                    <div className = "col-12 col-md-5 m-1">
                        <RenderComments comments = {props.comments} />
                    </div>
                </div>
        </div>
        );
    else
    return(
        <div/>
    )
    }


export default DishDetail;