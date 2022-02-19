import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Item from "./Item/Item";
import "./Items.scss";

const Items = ({data , title , addCounter , image }) => {
    return (
        <>
            <div className="items">
                <h2 className="items-title">{title}</h2>
                <div className="items-content">
                    {data.map(item =>
                        (
                            item.id < 6
                            ?
                            <Item
                                key={item.id}
                                name={item.name}  
                                body={item.body}  
                                addCounter={item.addCounter}
                                image={item.image}
                                category={item.category}
                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                addCounter={addCounter}
                                />
                            :
                            <p className="error">error</p>
                        )
                                
                    )}
                </div>
                <div className="items-btn__block">
                    <Link to="/product/category" className="items-btn__seeMore">
                        see more 
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

Items.propTypes = {
    data : PropTypes.array.isRequired,
}

export default Items;