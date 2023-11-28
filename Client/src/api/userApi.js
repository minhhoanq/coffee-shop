import request from "../utils/request";

export const getAllUsers = async ({page, limit, username, id, roles, firstname, lastname, sex, email, phone}) => {
    try {
        const res = await request.get('/api/v1/users', {
            params: {
                page: page,
                limit: limit, 
                username: username, 
                id: id,
                roles: roles,
                firstname: firstname,
                lastname: lastname,
                sex: sex,
                email: email,
                phone: phone,
            }
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

export const getUserById = async (id) => {
    try {
        const res = await request.get(`/api/v1/users/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getUserProfile = async() => {
    const res = await request.get('/api/v1/users/get_profile');
    return res;
}

export const getUserAddressList = async() => {
    const res = await request.get('/api/v1/users/address/get_user_address_list');
    return res.data;
}

export const setDefaultAddress = async(value) => {
    const res = await request.put('/api/v1/users/address/set_default_address', value);
    return res;
}

export const createUserAddress = async(data) => {
    const res = await request.post('/api/v1/users/address/create_user_address', data);
    return res.data;
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