const User = require("../models/User");
const userService = require("../services/userService");

const userController = {
    //Get all
    getAllUser: async(req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Get All Staff
    getAllStaff: async(req, res) => {
        try {
            const response = await userService.getAllStaffService();
            return res.status(200).json({status: 'Success!', data: response});
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Detele user
    deteleUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json("Detele successfully!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = userController;