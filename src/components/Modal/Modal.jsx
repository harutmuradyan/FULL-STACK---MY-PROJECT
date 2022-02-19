/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import './Modal.scss';

const Modal = ({modalActive , setModalActive , data , counter}) => {
   
    return (
        <div className={modalActive ? "modal active" : "modal"}>
             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content__block">
                    <div className="modal-btnclose" onClick={() => setModalActive(false)}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="modal-bar">
                        <p className="modal-bar__title">Categoryes</p>
                        <ul className="modal-bar_content">
                            <li className="modal-bar__item">
                                <Link to="/product/category/action" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Action
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/comedy" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Comedy
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/drama" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Drama
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/fantasy" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Fantasy
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/romance" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Romance
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/mystery" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Mystery
                                </Link>
                            </li>
                            <li className="modal-bar__item">
                                <Link to="/product/category/thiller" className="modal-bar__linq">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Thriller
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="modal-socialSite">
                        <Link to="/facebook" className="modal-socialSite__linq">
                            <img src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png"></img>
                        </Link>
                        <Link to="/instagram" className="modal-socialSite__linq">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></img>
                        </Link>
                        <Link to="/twiter" className="modal-socialSite__linq">
                            <img src="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png"></img>
                        </Link>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Modal;