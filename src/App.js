import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./component/Header/Header";
import SigninAndSignup from "./pages/SigninAndSignUp/SigninAndSignup";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            this.setState({currentUser: userAuth});
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                //    going to get data of user
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
                this.setState({currentUser: userAuth});
            }
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
