const User = require("../models/User");

const userController = {
    //Get all
    getAllUser: async(req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //Detele user
    deteleUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Detele successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;