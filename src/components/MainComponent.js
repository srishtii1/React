import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from'./HomeComponent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'; 
import {connect, Connect} from 'react-redux';
// main component will obtain the state from "STORE"

const mapStateToProps = state => {

  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};


class Main extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.props.leaders.filter((lead) => lead.featured)[0]}
        />

      );
    }
    console.log(this.props.dishes);
    const DishWithId = ( {match} ) => {
      if (this.props.dishes!= null)
      return(
        <DishDetail dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments = {this.props.comments.filter ((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
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
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>} />
            <Route path = "/menu/:dishId" component = {DishWithId} />
            <Route exact path = "/contactus" component = {Contact} />
            <Route path = "/About" component = {() => <About leaders  = {this.props.leaders}/>} />
            <Redirect to = "/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
//used an inline function for calling Menu since we needed to pass props as a parameter
//redirect is used as a default path when route does not match any of the two options given 