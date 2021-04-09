import React from "react";
import CollectionItem from "./../CollectionItem/CollectionItem ";
import "./collection-preview.styles.scss";


const PreviewCollection = ({ title, item }) => {
    console.log(title, item)
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {item
                    .filter((item, idx) => idx< 4 )
                    .map(({id, ...item})=> {
                    return (
                        <CollectionItem key={id} {...item}/>
                        )
                })}
            </div>
        </div>
    )
}

export default PreviewCollection;