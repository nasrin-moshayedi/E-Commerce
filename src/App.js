import React, { Component } from 'react';
import './App.css';
import {HomePage} from "./pages/homePage/HomePage";
import {Route, Switch} from "react-router-dom";
const HatPage =() => {
    return (
        <div>
            hatttttttt
        </div>
    )
}
class App extends Component {
  render() {
    return <div>
        <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/shop/hats"} component={HatPage}/>
        </Switch>
    </div>;
  }
}

export default App;
