const db = require("../models")

const getAllStaffService = () => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findAll({
            where: {
                roles: 2,
            },
            attributes: ['id', 'image', 'username', 'roles', 'sex', 'email', 'address', 'isDelete'],
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "success!" : "Can't found staff",
            staffData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const updateUserByidService = ({ id }) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.update({email, username, password, firstname, lastname, image, roles, sex, phone, birth, address, isDelete})
    } catch (error) {
        reject(error);
    }
})

const deleteUserbyIdService = ({ id }) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.destroy({
            where: {
                id,
            },
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "success!" : "Can't found staff",
            staffData: id,
        })
    } catch (error) {
        reject(error)
    }
});

module.exports = { getAllStaffService, deleteUserbyIdService };
