import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={`/shop`} component={ShopPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
