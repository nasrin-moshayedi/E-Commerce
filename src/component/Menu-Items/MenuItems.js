import React from "react";
import {Link} from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => {
    console.log(imageUrl, title, linkUrl,match,history);
    return(
        <Link to={linkUrl} className={`${size} menu-item`} >
            <div style={{backgroundImage: `url(${imageUrl})`}} className={"background-image"}>
                <div className="content">
                    <h1 className="title">{title && title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </Link>
    )
};

export default MenuItem;