import React from "react";
import {Link} from 'react-router-dom'
import "./Header.scss"


const Header = ({counter , setModalActive }) => {
    return(
        <header className="header">
            <div className="header-logo">
                <Link to='/' className="header-logo__linq">
                    <h1 className="header-logo__img">
                        Movies
                        <span>Free</span>
                    </h1>
                </Link>
            </div>
            <div className="header-navbar">
                <ul className="header-navbar__items">
                    <li className="header-navbar__item">
                        <Link to="/order">
                            <button className="header-navbar__link barbtn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                <div className="counter">
                                    <p>{counter}</p>
                                </div>
                            </button>
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/' className="header-navbar__link">
                            Product
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/about' className="header-navbar__link">
                            About
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/contact' className="header-navbar__link">
                            Contact
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/login' className="header-navbar__link">
                            Login
                        </Link>
                    </li>
                    <li className="header-navbar__item " onClick={(e) => e.stopPropagation()}>
                        <button className="header-navbar__link barbtn"
                            onClick={(e) => 
                                setModalActive(true) }
                            >
                            <i className="fa fa-bars"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;