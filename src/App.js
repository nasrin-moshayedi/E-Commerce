import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";

class App extends Component {
  render() {
      console.log(this.props)
    return <div>
        <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={`/shop`} component={ShopPage}/>
        </Switch>
    </div>;
  }
}

export default App;
