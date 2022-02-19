import React from "react";
import Slayder from "../../Slayder/Slayder";
import Items from "../Items/Items";
import './Product.scss'

const Product = ({addCounter , data }) => {

    return (
        <div className="product-page">
            <Slayder/>
            <Items data={data} title="new films" addCounter={addCounter}/>
            <Items data={data} title="Top films" addCounter={addCounter}/>
            <Items data={data} title="Favorit films" addCounter={addCounter}/>
        </div>
    )
}

export default Product;