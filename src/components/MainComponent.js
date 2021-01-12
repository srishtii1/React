import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from'./HomeComponent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { addComment,fetchComments,fetchDishes, fetchPromos } from '../redux/ActionCreators';
import { actions } from "react-redux-form";

// main component will obtain the state from "STORE"
const mapStateToProps = state => {

  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
    fetchDishes: ()=> {dispatch(fetchDishes())},
    fetchComments: ()=> {dispatch(fetchComments())},
    fetchPromos: ()=> {dispatch(fetchPromos())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      console.log("props promo " + this.props.promotions);
      if (this.props.dishes != null)
      return(
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
    />
      );
      else return (<div/>);
     
    }
    console.log(this.props.dishes);
    const DishWithId = ( {match} ) => {
      if (this.props.dishes!= null)
      return(
        <DishDetail dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess = {this.props.dishes.errMess}
          comments = {this.props.comments.comments.filter ((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess = {this.props.comments.errMess}
          addComment = {this.props.addComment}
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
            <Route exact path = "/contactus" component = {() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm}/> } />
            <Route path = "/About" component = {() => <About leaders  = {this.props.leaders.leaders}/>} />
            <Redirect to = "/home" component = {HomePage}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
//used an inline function for calling Menu since we needed to pass props as a parameter
//redirect is used as a default path when route does not match any of the two options given 