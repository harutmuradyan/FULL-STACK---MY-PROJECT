import React , {useContext} from "react";
import { Link } from "react-router-dom";
import Item from "../../Items/Item/Item";
import './Comedy.scss'
import { MyContext } from "../../../../App";

const Comedy = ({ addCounter }) => {

    const value = useContext(MyContext);

    const arr = []
    value.forEach(elem => {
        if (elem.category === "comedy" ) {
        arr.push(elem)
        }
    })

    return (
        <>
            <div className="actions">
                <h2 className="items-title">Comedy</h2>
                <div className="items-content">
                    {
                        arr.map((item, index) => (
                            <Item
                                key={index}
                                name={item.name}  
                                body={item.body}  
                                addCounter={addCounter}
                                image={item.image}
                                category={item.category}
                            />    
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

export default Comedy;
