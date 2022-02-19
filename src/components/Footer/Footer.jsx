import React from "react";
import {Link} from 'react-router-dom'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to='/' className="footer-logo__linq">
                        <h1 className="footer-logo__img">
                            Movies
                            <span>Free</span>
                        </h1>
                    </Link>
                </div>
                <div className="footer-navbar">
                    <ul className="footer-navbar__items">
                        <li className="footer-navbar__item">
                            <Link to='/about' className="footer-navbar__link">
                                About
                            </Link>
                        </li>
                        <li className="footer-navbar__item">
                            <Link to='/contact' className="footer-navbar__link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyring">
                <p>copyring 2022</p>
            </div>
        </footer>
    )
}

export default Footer;