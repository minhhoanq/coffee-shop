import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess, logoutFail, logoutStart, logoutSuccess } from "../redux/slice/authSlice";
import request from "../utils/request";

export const loginUSer = async (user) => {
    // try {
    //     console.log("check api")
    const res = await request.post("/api/v1/auth/login", user, {
        withCredentials: true,
    });
    // dispatch(loginSuccess(res.data));
    // navigate('/');
    // console.log("check:" , res);
    return res;
    // } catch (error) {
    //     // dispatch(loginFail());
    //     console.log('check err api')
    //     return error;
    // }
};

export const registerUSer = async (user, dispatch, navigate) => {
    // dispatch(registerStart());
    try { 
        // await request.post("/api/v1/auth/register", user, {
        //     withCredentials: true,
        // });
        // dispatch(registerSuccess());
        // navigate('/login');
    } catch (error) {
        // dispatch(registerFail());
        return error;
    }
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

export const logoutUser = async (dispatch, id, accessToken) => {
    // dispatch(logoutStart());
    console.log(id + accessToken)
    try { 
        const res = await request.post("/api/v1/auth/logout",{id}, {
            withCredentials: true,
            headers: { token: `Bearer ${accessToken}` },
        });
        // dispatch(logoutSuccess());
        return res;
    } catch (error) {
        // dispatch(logoutFail());
    }
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