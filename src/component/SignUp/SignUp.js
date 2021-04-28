import React from "react";

import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";

import { auth, createUserProfileDocument} from "./../../Firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("password dont match");
            return ;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
        } catch (e) {
            console.log(e.message, this.state)
        }
    };

    handleChange = (e) => {
        e.persist();
        const {name} = e.target;
        // console.log(name , value)
        this.setState({[name]: e.target.value});
        console.log(this.state, "sdfsd", e)
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(this.state)
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                    />
                    <CustomButton type={"submit"}>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;