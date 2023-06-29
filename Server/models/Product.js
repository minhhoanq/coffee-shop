const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLeght: 10,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minLeght: 6,
    },
    shortDescription: {
        type: String,
        minLeght: 6,    
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);
