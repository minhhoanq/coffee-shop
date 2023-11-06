import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess, logoutFail, logoutStart, logoutSuccess } from "../redux/slice/authSlice";
import request from "../utils/request";

export const loginUSer = async (user) => {
    const res = await request.post("/api/v1/auth/login", user, {
        withCredentials: true,
    });
    return res;
};

export const registerUSer = async (user) => {
    const response = await request.post("/api/v1/auth/register", user, {
        withCredentials: true,
    });
    return response;
};

//Register Staff
export const registerStaff = async (staff, dispatch, navigate) => {
    // dispatch(registerStart());
    try { 
        const res = await request.post("/api/v1/auth/register", staff);
        // dispatch(registerSuccess());
        // navigate('/admin/staff');
        return res;
    } catch (error) {
        // dispatch(registerFail());
        return error;
    }
};

export const finalRegister = async(token) => {
    try {
        const response = await request.put(`api/v1/auth/final-register`, {
            token: token,
        });

        return response;
    } catch (error) {
        return error;
    }
}

export const logoutUser = async(id) => {
    // console.log(id)
    const res = await request.post("/api/v1/auth/logout",{id}, {
        withCredentials: true,
    });

    return res;
};

//Forgot Password
export const forgotPasswordUser = async (email) => {
    try {
        console.log(email);
        const response = await request.post('/api/v1/auth/forgot-password', {email});

        return response;
    } catch (error) {
        return error;
    }
}

//Reset Password
export const resetPasswordUser = async (token, password) => {
    try {
        const response = await request.post(`/api/v1/auth/reset-password`, {token, password});

        return response;
    } catch (error) {
        return error;
    }
}