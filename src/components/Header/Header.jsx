/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {Link} from 'react-router-dom'
import "./Header.scss"


const Header = ({counter , setModalActive}) => {
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
                        <Link to='/' className="header-navbar__link">
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/product' className="header-navbar__link">
                            <a>
                                Product
                            </a>
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/about' className="header-navbar__link">
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <Link to='/contact' className="header-navbar__link">
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li className="header-navbar__item">
                        <button className="header-navbar__link barbtn"
                            onClick={() => setModalActive(true)}
                            >
                            <a>
                                <i className="fa fa-bars"></i>
                                <div className="counter">
                                    <p>{counter}</p>
                                </div>
                            </a>   
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;