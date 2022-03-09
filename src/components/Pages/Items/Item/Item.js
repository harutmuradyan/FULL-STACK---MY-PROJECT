import React from "react";
import { Link } from "react-router-dom";
import './Item.scss';

const Item = ({image,body,addCounter,movieId}) => {


    return (
        <>
            <div className="item">
                <i  className="fa fa-close"></i>
                <div className="item-img">
                    <img src={image} alt="img"/>
                </div>
                <p  className="item-body">{body}</p>
                <div className="item-order__content">
                    <button className="item-order__button"
                            onClick={addCounter}
                            >   
                            by Order
                    </button>
                </div>
                <div className="item-see__content">
                    <button className="item-see__button">
                        <Link to="/product/category/id"  className="item-see__link">
                            By See
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
} 

export default Item;