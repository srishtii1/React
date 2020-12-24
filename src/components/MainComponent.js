import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from'./HomeComponent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect} from 'react-router-dom'; 

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }


  render() {
    const HomePage = () => {
      return(
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.state.leaders.filter((lead) => lead.featured)[0]}
        />

      );
    }
    console.log(this.state.dishes);
    const DishWithId = ( {match} ) => {
      if (this.state.dishes!= null)
      return(
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments = {this.state.comments.filter ((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        /> 
      );
      else
      return(
        <div />
      );
    }
    return (
      <div>
        <Header/>
          <Switch>
            <Route path = "/home" component = {HomePage} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
            <Route path = "/menu/:dishId" component = {DishWithId} />
            <Route exact path = "/contactus" component = {Contact} />
            <Route path = "/About" component = {() => <About leaders  = {this.state.leaders}/>} />
            <Redirect to = "/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
//used an inline function for calling Menu since we needed to pass props as a parameter
//redirect is used as a default path when route does not match any of the two options given 