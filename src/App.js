import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";
import SigninAndSignup from "./pages/SigninAndSignUp/SigninAndSignup";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={`/shop`} component={ShopPage}/>
                    <Route exact path={`/signin`} component={SigninAndSignup}/>
                </Switch>
            </div>
        );
    }
}

export default App;
