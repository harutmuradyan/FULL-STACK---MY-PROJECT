import React from "react";
import Items from "../Pages/Product/Items/Items";
import './Modal.scss';

const Modal = ({modalActive , setModalActive , data}) => {
   
    return (
        <div className={modalActive ? "modal active" : "modal"}>
             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="btnclose" onClick={() => setModalActive(false)}>
                <i className="fa fa-bars"></i>
                </button>
                <h2 className="modal-title">Orders</h2>

                <Items data={data}/>
             </div>
        </div>
    )
}

export default Modal;