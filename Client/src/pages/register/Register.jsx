import React, { useState } from "react"

import './register.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
import { registerUSer } from "../../redux/slice/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const newRegister = {
            email: email,
            username: username,
            password: password,
        };

        registerUSer(newRegister, dispatch, navigate);
    }

    return (
        <div className="register">
            <div className="register__container">
                <div className="register__container__wrapper">
                    <div className="register__container__wrapper__logo">
                        <i class="ri-cup-line"></i>
                    </div>

                    <form action="" className="register__container__wrapper__form" onSubmit={handleRegister}>
                        <input 
                            type="text" 
                            className="register__container__wrapper__form__email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            />

                        <input 
                            type="text" 
                            className="register__container__wrapper__form__username" 
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)}
                            />

                        <input 
                            type="password" 
                            className="register__container__wrapper__form__password" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />

                        <Button className="register__container__wrapper__form__btn-register" type={"submit"} >Register</Button>
                    </form>

                    <div className="register__container__wrapper__bulkhead">
                        <div className="register__container__wrapper__bulkhead__line-left">
                        </div>

                        <span className="register__container__wrapper__bulkhead__or">
                            OR
                        </span>

                        <div className="register__container__wrapper__bulkhead__line-right">

                        </div>
                    </div>

                    <div className="register__container__wrapper__with">
                        <img src={googleImg} alt="" />
                        register with Google
                    </div>

                    <Link className="register__container__wrapper__forgot-pw">Forgot password?</Link>
                </div>

                <div className="register__container__signup">

                </div>

                <div className="register__container__app">

                </div>
            </div>
        </div>
    );
}

export default Register;