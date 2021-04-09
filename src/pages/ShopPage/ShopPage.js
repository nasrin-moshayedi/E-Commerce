import React from "react";
import ShopData from "./2.3 shop.data";
import PreviewCollection from "./../../component/PreviewCollection/PreviewCollection";

class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render() {
        console.log(this.state.collections)
        return(
            <div>
                {this.state.collections.map((collection) => {
                    return (
                        <PreviewCollection title={collection.title} item={collection.items}/>
                    )
                })}
            </div>
        )
    }
}

export default ShopPage;