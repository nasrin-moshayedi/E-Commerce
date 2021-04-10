import React from "react";
import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";
import "./Signin.styles.scss";
import { signinWidthGoogle } from "./../../Firebase/firebase.utils";

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        const {value, name} = e.target;
        console.log(name , value)
        this.setState({[name]: value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // this.setState(({email: "", password: ""}));
        console.log(this.state)
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">sign in with your email and password</span>

                <form action="">
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="Email"/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="password"/>

                    <CustomButton type="submit">
                        Signin
                    </CustomButton>
                    <CustomButton onClick={(event) => {event.preventDefault();
                    signinWidthGoogle();
                    }}>
                        Signin with google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;