import React from "react";
import './Register.scss';
import { Link } from "react-router-dom"; 

const Register = () => {
    return (
        <>
             <div className="register">
                <form className="form">
                    <div className="form-content">
                        <div className="form-group">
                            <label  className="form-group__label">Tel :</label>
                            <input  className="form-group__input"
                                    placeholder="Insert Tel"
                                    type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="form-group__label">Email :</label>
                            <input  className="form-group__input"
                                    placeholder="Insert Email"
                                    type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="form-group__label">Password</label>
                            <input  className="form-group__input"
                                    placeholder="Insert Password"
                                    type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label  className="form-group__label">Repeat Password</label>
                            <input  className="form-group__input"
                                    placeholder="Insert Password"
                                    type="text"
                            />
                        </div>
                        <div className="form-group"> 
                            <Link to="/login" className="form-group__linq">To account</Link>
                        </div>
                        <button  className="form-group__submit" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;