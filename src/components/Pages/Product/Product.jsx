import React from "react";
import Items from "./Items/Items";
import './Product.scss'

const Product = ({addCounter , data}) => {

    return (
        <div className="product-page">
            <Items data={data} title="new films" addCounter={addCounter}/>
            <Items data={data} title="Top films"/>
            <Items data={data} title="Favorit films"/>
        </div>
    )
}

export default Product;