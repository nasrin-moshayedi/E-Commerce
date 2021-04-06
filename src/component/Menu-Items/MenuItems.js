import React from "react";
import "./menu-item.styles.scss"
const MenuItem = ({title, bg, size}) => {
    console.log(bg, title);
    return(
        <div style={{backgroundImage: `url(${bg})`}} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
};

export default MenuItem;