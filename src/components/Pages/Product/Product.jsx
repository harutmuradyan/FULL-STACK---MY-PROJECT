import React ,{useState} from "react";
import Items from "./Items/Items";
import './Product.scss'

const Product = () => {

        const [carts,setCarts] = useState([
            {id:1, title : "Forsage 8", body : "asd"},
            {id:2, title : "Forsage 8", body : "asd"},
            {id:3, title : "Forsage 8", body : "asd"},
            {id:4, title : "Forsage 8", body : "asd"},
            {id:5, title : "Forsage 8", body : "asd"}
      ]);

    return (
        <div className="product-page">
            <Items data={carts} title="new films"/>
            <Items data={carts} title="Top films"/>
            <Items data={carts} title="Favorit films"/>
        </div>
    )
}

export default Product;