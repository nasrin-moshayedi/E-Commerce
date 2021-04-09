import React from "react";
import "./collection-preview.styles.scss";


const PreviewCollection = ({ title, item }) => {
    console.log(title, item)
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {item
                    .filter((item, idx) => idx< 4 )
                    .map(item=> {
                    return (
                            <div>
                                {item.name}
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default PreviewCollection;