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

//Register Staff
export const registerStaff = async (staff, dispatch, navigate) => {
    dispatch(registerStart());
    try { 
        await request.post("/api/v1/auth/register", staff);
        dispatch(registerSuccess());
        navigate('/staff');
    } catch (error) {
        dispatch(registerFail());
        return error;
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

export const getAllProduct = async () => {
    try {
        const res = await request.get('/api/v1/product');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async (name, order, page, limit, categoryId) => {
    try {
        const res = await request.get('/api/v1/product', {
            params: {
                name,
                order,
                page,
                limit,
                categoryId,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductByCategoryId = async (id) => {
    try {
        const res = await request.post('/api/v1/product/category', {categoryId: id});
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProductDetailById = async (id) => {
    try {
        const res = await request.post('/api/v1/product/detail', {productId: id});
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getToCartItem = async (cartId) => {
    try {
        const res = await request.get('/api/v1/product/cart-item', {
            params: {
                cartId,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addToCartItem = async (cartId, productSizeId, quantity, price, note) => {
    try {
        const res = await request.post('/api/v1/product/cart-item', {
            cartId,
            productSizeId, 
            quantity, 
            price,
            note,
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getAllStaff = async () => {
    try {
        const res = await request.get('/api/v1/users/staff');
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteUserById = async(id) => {
    try {
        const res = await request.delete(`/api/v1/users/${id}`)
    } catch (error) {
        return error;
    }
}