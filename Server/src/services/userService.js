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

module.exports = { getAllStaffService };
