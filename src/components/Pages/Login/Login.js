import React from "react";
import './Login.scss';
import { Link } from "react-router-dom"; 

const Login = () => {
    return (
        <>
            <div className="login">
                <form className="form">
                    <div className="form-content">
                        <div className="form-group">
                            <label  className="form-group__label">Email</label>
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
                            <label  className="form-group__label">Remember</label>
                            <input  className="form-group__input"
                                    type="checkbox"
                            />
                        </div>
                        <div className="form-group"> 
                            <Link to="/register" className="form-group__linq">Create account</Link>
                        </div>
                        <button  className="form-group__submit" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;