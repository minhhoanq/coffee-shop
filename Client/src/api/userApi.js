import request from "../utils/request";

export const getAllStaff = async (accessToken) => {
    try {
        const res = await request.get('/api/v1/users', {
            params: {
                roles: 2,
            },
            headers:({
                token: `Bearer ${accessToken}`
            })
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getAllUserSoftDelete = async (roles) => {
    try {
        const res = await request.get('/api/v1/users/trash', {
            params: {
                roles,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getUserById = async (id, accessToken) => {
    try {
        const res = await request.get(`/api/v1/users/${id}`, {
            headers:({
                token: `Bearer ${accessToken}`
            })
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getUserProfile = async() => {
    const res = await request.get('/api/v1/users/get_profile');
    return res;
}

export const softDeleteUserById = async(id, dispatch, navigate) => {
    // dispatch(softDeleteStart());
    // try {
    //     const res = await request.delete(`/api/v1/users/${id}`);
    //     dispatch(softDeleteSuccess());
    //     navigate('/admin/staff')
    //     return res;
    // } catch (error) {
    //     dispatch(softDeleteError());
    // }
}

export const hardDeleteUserById = async(id) => {
    try {
        const res = await request.delete(`/api/v1/users/${id}/force`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const restoreUserById = async(id) => {
    try {
        const res = await request.patch(`/api/v1/users/${id}/restore`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const updateUserbyUser = async(user) => {
    const res = await request.put('/api/v1/users/update_profile', user);

    return res;
}

// Tương tác với khách hàng => Đề xuất sản phẩm kích thích nhu cầu mua hàng.