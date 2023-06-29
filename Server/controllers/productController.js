const Product = require("../models/Product");
const db = require("../config/db");

const productController = {
    //Get all product
    getAllProduct: async(req, res) => {
        const sql = "SELECT * FROM account";
        db.query(sql, (err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        });

    }
}

module.exports = productController;