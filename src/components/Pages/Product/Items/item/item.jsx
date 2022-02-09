/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './item.scss';

const Item = ({id,title,body}) => {

    return (
        <>
            <div className="item">
                <i  className="fa fa-close"></i>
                <p  className="item-id">{id}</p>
                <h2 className="item-title">{title}</h2>
                <div className="item-img">
                    <img src="https://oboi-telefon.ru/wallpapers/26718/37768.jpg"></img>
                </div>
                <p  className="item-body">{body}</p>
                <div className="item-order__content">
                    <button className="item-order__button"
                            
                            >   
                            by Order
                    </button>
                </div>
            </div>
        </>
    )
} 

export default Item;