import React from "react";
import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";
import "./Signin.styles.scss";
import {auth, signinWidthGoogle } from "./../../Firebase/firebase.utils";

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        e.persist();
        const {name} = e.target;
        // console.log(name , value)
        this.setState({[name]: e.target.value});
        console.log(this.state, "sdfsd", e)
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(this.state)
        try {
            console.log("SDFsdf")
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password : ""})
        } catch (e) {
            console.log(e.message, this.state)
        }
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">sign in with your email and password</span>

                <form action="">
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="Email"/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="password"/>

                    <div className="buttons">
                        <CustomButton type="submit" onClick={this.handleSubmit}>
                            Signin
                        </CustomButton>
                        <CustomButton isGoogleSignin onClick={(event) => {event.preventDefault();
                            signinWidthGoogle();
                        }}>
                            Signin with google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default Signin;