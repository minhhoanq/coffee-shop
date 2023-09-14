const userService = require("../services/userService");

const userController = {

    //Get All Staff
    getAllUser: async(req, res) => {
        try {
            const response = await userService.getAllUserService(req.query);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getUserProfile: async(req, res) => {
        try {
            const response = await userService.getUserProfileService(req.user, req.headers.token);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getUserAddressList: async(req, res) => {
        try {
            const response = await userService.getUserAddressListService(req.user);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    
    createUserAddress: async(req, res) => {
        try {
            const response = await userService.createUserAddressListService(req.user, req.body);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateUserAddress: async(req, res) => {
        try {
            const response = await userService.updateUserAddressService(req.user, req.body);

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteUserAddress: async(req, res) => {
        try {
            const response = await userService.deleteUserAddress(req.user, req.body);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error)    
        }
    },

    getAllUserSoftDelete: async(req, res) => {
        try {
            const response = await userService.getAllUserSoftDeteleService(req.query);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getUserById: async(req, res) => {
        try {
            const response = await userService.getUserByIdService(req.params);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //UpdateUser
    updateUser: async(req, res) => {
        try {
            const response = await userService.updateUserByIdService({id: req.params.id, user: req.body});

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateUserByUser: async(req, res) => {
        try {
            const response = await userService.updateUserByUserService(req.user, req.body, req.file);

            return res.status(200).json(response);
            return;
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Detele user
    softDeleteUser: async(req, res) => {
        try {
            const response = await userService.softDeleteUserbyIdService(req.params);
            
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    hardDeleteUser: async(req, res) => {
        try {
            const response = await userService.hardDeleteUserbyIdService(req.params);
            
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    restoreUser: async(req, res) => {
        try {
            const response = await userService.restoreUserByIdService(req.params);
            
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}

module.exports = userController;