import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";
import SigninAndSignup from "./pages/SigninAndSignUp/SigninAndSignup";
import {auth} from "./Firebase/firebase.utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null; //new method default is null

    componentDidMount() {
    //  fetch data firebase
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(this.state.currentUser, user);

        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();//close unSubscription
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
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
