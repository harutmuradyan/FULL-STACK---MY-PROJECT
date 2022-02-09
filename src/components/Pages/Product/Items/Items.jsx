import React from "react";
import './Items.scss';
import Item from "./item/item";
import PropTypes from 'prop-types'

const Items = ({data , title}) => {
    return (
        <>
            <div className="items">
                <h2 className="items-title">{title}</h2>
                <div className="items-content">
                    {data.map(item => 
                        <Item  key={item.id} title={item.title}  body={item.body} id={item.id} />
                    )}
                </div>
            </div>
        </>
    )
}

Items.propTypes = {
    data : PropTypes.array.isRequired
}

export default Items;