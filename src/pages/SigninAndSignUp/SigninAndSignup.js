import React from "react";
import Signin from "./../../component/Signin/Signin";
import SignUp from "./../../component/SignUp/SignUp";
import "./SigninAndSignup.styles.scss";
const SigninAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin/>
            <SignUp/>
        </div>
    )
}

export default SigninAndSignUp;