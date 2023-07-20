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

    //Detele user
    deleteUser: async(req, res) => {
        try {
            const response = await User.findById(req.params.id);
            return res.status(200).json("Detele successfully!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = userController;