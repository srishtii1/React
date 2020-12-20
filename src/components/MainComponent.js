import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from'./HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom'; 

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }


  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header/>
          <Switch>
            <Route path = "/home" component = {Home} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
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