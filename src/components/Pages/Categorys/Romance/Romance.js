/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Item from "../../Items/Item/Item";
import './Romance.scss'

const Romance = ({data , addCounter }) => {
    return (
        <>
            <div className="actions">
                <h2 className="items-title">Romance</h2>
                <div className="items-content">
                    {
                        data.map(item => (
                            item.category === "romance" 
                            ?
                                
                                <Item
                                    key={item.id}
                                    name={item.name}  
                                    body={item.body}  
                                    addCounter={item.addCounter}
                                    image={item.image}
                                    category={item.category}
                                    addCounter={addCounter}
                                />
                                    
                            :
                            <p className="error">error</p>            
                        ))
                    }
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

Romance.propTypes = {
    data : PropTypes.array.isRequired,
}

export default Romance;
