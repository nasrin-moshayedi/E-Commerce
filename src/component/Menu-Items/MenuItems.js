import React from "react";
import "./menu-item.styles.scss"
const MenuItem = ({title, bg, size}) => {
    console.log(bg, title);
    return(
        <div className={`${size} menu-item`}>
            <div style={{backgroundImage: `url(${bg})`}} className={"background-image"}>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )
};

export default MenuItem;