import request from "../utils/request";

export const getAllStaff = async () => {
    try {
        const res = await request.get('/api/v1/users', {
            params: {
                roles: 2,
            },
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

export const softDeleteUserById = async(id) => {
    try {
        const res = await request.delete(`/api/v1/users/${id}`);
        return res;
    } catch (error) {
        return error;
    }
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