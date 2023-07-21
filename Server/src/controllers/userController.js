const { response } = require("express");
const User = require("../models/User");
const userService = require("../services/userService");

const userController = {

    //Get All Staff
    getAllUser: async(req, res) => {
        try {
            const response = await userService.getAllStaffService();
            return res.status(200).json({status: 'Success!', data: response});
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //UpdateUser
    updateUser: async(req, res) => {
        try {
            const response = await userService.updateUserByIdService({id: req.params.id, user: req.body});
            console.log("check");
            return res.status(200).json({status: 'Update Success', data: response})
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Detele user
    deleteUser: async(req, res) => {
        try {
            const response = await userService.deleteUserbyIdService(req.params);
            
            return res.status(200).json({status: 'Done!', data: response});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = userController;