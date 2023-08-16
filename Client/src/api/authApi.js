import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess, logoutFail, logoutStart, logoutSuccess } from "../redux/slice/authSlice";
import request from "../utils/request";

export const loginUSer = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post("/api/v1/auth/login", user, {
            withCredentials: true,
        });
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFail());
    }
};

export const registerUSer = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try { 
        await request.post("/api/v1/auth/register", user, {
            withCredentials: true,
        });
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFail());
    }
};

//Register Staff
export const registerStaff = async (staff, dispatch, navigate) => {
    dispatch(registerStart());
    try { 
        const res = await request.post("/api/v1/auth/register", staff);
        dispatch(registerSuccess());
        navigate('/admin/staff');
        return res;
    } catch (error) {
        dispatch(registerFail());
        return error;
    }
};

export const logoutUser = async (dispatch, id, navigate, accessToken) => {
    dispatch(logoutStart());
    try { 
        const res = await request.post("/api/v1/auth/logout",{id}, {
            withCredentials: true,
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());
        navigate('/login');
        return res;
    } catch (error) {
        dispatch(logoutFail());
    }
};

//Forgot Password
export const forgotPasswordUser = async (data) => {
    try {
        const response = await request.post('/api/v1/auth/forgot-password', {data});

        return response;
    } catch (error) {
        return error;
    }
}

//Reset Password
export const resetPasswordUser = async (token, data) => {
    try {
        const response = await request.post(`/api/v1/auth/reset-password/${token}`, {data});

        return response;
    } catch (error) {
        return error;
    }
}