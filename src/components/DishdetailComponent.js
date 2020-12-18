import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle} from 'reactstrap';


class DishDetail extends Component{


    renderDish(dishSelected)
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

    renderComments(dishSelected)
    {
        // const comm = dishSelected.comments.map((i) => {
        //     return(
        //         <div >   
        //             <ul class = "list-unstyled">
        //                 <li> {i.comment}</li>
        //                 <li>-- {i.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(i.date)))} </li>
        //             </ul> 
        //         </div>
        //     );

        // });
    
        if(dishSelected != null && dishSelected.comments != null){
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
                    <Card key = {this.props.dish.id}>
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

    render()
    {
        console.log(this.props.dish);
        return(
         <div className = "container" >
                <div class = "row">
                    <div class = "col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish[0])}
                    </div>  
                    <div class = "col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish[0])}
                    </div>
                </div>
        </div>
        );
    }

}
export default DishDetail;