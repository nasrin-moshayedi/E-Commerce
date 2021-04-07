import React from "react";
import MenuItem from "../Menu-Items/MenuItems";
import "./directory.styles.scss";

class Directory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/womens.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: "large",
                    linkUrl: 'shop/women'
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: "large",
                    linkUrl: '/shop/men'
                },
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...States}) => {
                    return (
                            <MenuItem key={id} {...States}/>
                        )
                })}
            </div>
        )
    }
}

export default Directory;