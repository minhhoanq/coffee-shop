import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess } from "./authSlice";
import request from "../../utils/request";

export const loginUSer = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFail());
    }
};

export const registerUSer = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try { 
        const res = await request.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFail());
    }
};