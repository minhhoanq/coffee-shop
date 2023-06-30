import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess, logoutFail, logoutStart, logoutSuccess } from "./authSlice";
import request from "../../utils/request";

export const loginUSer = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post("/api/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFail());
    }
};

export const registerUSer = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try { 
        await request.post("/api/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFail());
    }
};

export const logoutUser = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart());
    try { 
        await axiosJWT.post("/api/v1/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` } 
        });
        dispatch(logoutSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(logoutFail());
    }
};