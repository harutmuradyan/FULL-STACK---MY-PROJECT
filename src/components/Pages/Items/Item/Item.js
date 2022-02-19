/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Item.scss';

const Item = ({id,title,name,image,body,addCounter}) => {


    return (
        <>
            <div className="item">
                <i  className="fa fa-close"></i>
                <div className="item-img">
                    <img src={image}/>
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
                    <button  className="item-see__button">
                        By See
                    </button>
                </div>
            </div>
        </>
    )
} 

export default Item;