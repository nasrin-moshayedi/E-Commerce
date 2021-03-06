import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./../../assets/4.2 crown.svg";
import {auth} from "./../../Firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({currentUser}) => {
    return (
            <div className="header">
                <Link to={"/"}>
                    <Logo className={'logo'}/>
                </Link>
                <div className="options">
                    <Link className="option" to={"/shop"}>
                        SHOP
                    </Link>
                    <Link className="option" to={"/shop"}>
                        CONTACT
                    </Link>
                    {currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SignOut</div>
                        :
                        <Link className="option" to={"/signin"}>Sign In</Link>
                    }
                </div>


            </div>
        )
}
export default Header;