import React, { useState } from "react"

import './login.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
import { loginUSer } from "../../redux/slice/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            password: password,
        }

        loginUSer(newUser, dispatch, navigate);
    }
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__container__wrapper">
                    <div className="login__container__wrapper__logo">
                        <i class="ri-cup-line"></i>
                    </div>

                    <form action="" className="login__container__wrapper__form" onSubmit={handleSubmit}>
                        <input
                            type="text" 
                            className="login__container__wrapper__form__username" 
                            placeholder="Phone number, username or email" 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        <input 
                            type="password" 
                            className="login__container__wrapper__form__password" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />

                        <Button type={"submit"} className="login__container__wrapper__form__btn-login" >Log in</Button>
                    </form>

                    <div className="login__container__wrapper__bulkhead">
                        <div className="login__container__wrapper__bulkhead__line-left">
                        </div>

                        <span className="login__container__wrapper__bulkhead__or">
                            OR
                        </span>

                        <div className="login__container__wrapper__bulkhead__line-right">

                        </div>
                    </div>

                    <div className="login__container__wrapper__with">
                        <img src={googleImg} alt="" />
                        Login with Google
                    </div>

                    <Link className="login__container__wrapper__forgot-pw">Forgot password?</Link>
                </div>

                <div className="login__container__signup">

                </div>

                <div className="login__container__app">

                </div>
            </div>
        </div>
    )
}

export default Login;