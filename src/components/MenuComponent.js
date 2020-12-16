import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent'

//defining a new component 'Menu'
class Menu extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Component method constructor called');
    }

    onDishSelect(dish)
    {
        console.log("Dish selected");
        this.setState({ selectedDish: dish });
    }

    // renderDish(dish)
    // {
    //     if(dish != null)
    //         return(
    //             <Card>
    //                 <CardImg top  src = {dish.image} alt = {dish.name} />
    //                 <CardBody>
    //                     <CardTitle> { dish.name } </CardTitle>
    //                     <CardText> { dish.description } </CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     else
    //         return(
    //             <div> </div>
    //         ); 

    // }
    
    componentDidMount(){
        console.log('Menu component componentDidMount called');
    }

    // render returns what will be displayed on the screen
    render(){
        console.log('menu component render method called');
        const menu = this.props.dishes.map((dish) => {
            return(
                <div className = "col-12 col-md-5 m-1">
                    <Card key = {dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width = "100%"  src = {dish.image} alt = {dish.name} />
                        <CardImgOverlay>
                            <CardTitle style = {{ fontWeight: "bold" }}>{dish.name}</CardTitle>      
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(

            <div className = "container">
                <div className = "row">
                        {menu}
                </div>
                
                {this.state.selectedDish != null ? <div className = "row">
                    <DishDetail dish = {this.state.selectedDish} comments = {this.state.selectedDish.comments}/>
                </div> : <div/>}
            </div>
        ); 
        
    }
}

export default Menu; 