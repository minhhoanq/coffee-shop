const db = require("../models")

const getAllUserService = ({roles}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findAll({
            where: {
                roles,
            },
            attributes: ['id', 'email', 'username', 'firstname', 'lastname', 'roles', 'sex', 'phone', 'address'],
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "success!" : "Can't found user",
            usersData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const getAllUserSoftDeteleService = ({roles}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findAll({
            where: {
                roles,
            },
            paranoid: false,
            attributes: ['id', 'email', 'username', 'firstname', 'lastname', 'roles', 'birth', 'sex', 'phone', 'deletedAt', 'address'],
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "success!" : "Can't found user",
            usersData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const updateUserByIdService = ({ user, id }) => new Promise(async(resolve, reject) => {
    try {
            const email = user.email;
            const username = user.username;
            const password = user.password;
            const firstname = user.firstname;
            const lastname = user.lastname;
            const image = user.image;
            const roles = user.roles;
            const sex = user.sex;
            const phone = user.phone;
            const birth = user.birth;
            const address = user.address;
            //
            const response = await db.User.update({email, username, password, firstname, lastname, image, roles, sex, phone, birth, address}, {
                where: {id}
            });
        resolve({
            err: response ? 0 : 1,
            mes: response ? "success!" : "Can't found user",
            data: response,
        })
    } catch (error) {
        reject(error);
    }
});

const softDeleteUserbyIdService = ({ id }) => new Promise( async(resolve, reject) => {
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

const hardDeleteUserbyIdService = ({ id }) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.destroy({
            where: {
                id,
            },
            force: true
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

const restoreUserById = ({ id }) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.restore({
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

module.exports = { getAllUserService, getAllUserSoftDeteleService, updateUserByIdService, softDeleteUserbyIdService, hardDeleteUserbyIdService, restoreUserById };
