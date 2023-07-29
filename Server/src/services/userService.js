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
            mes: response ? "Thành công!" : "Không tìm thấy Users!",
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
            mes: response ? "Thành công!" : "Không tìm thấy Users bị xóa",
            usersData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const getUserByIdService = ({id}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {
                id,
            },
            paranoid: false,
            attributes: ['id', 'email', 'username', 'firstname', 'lastname', 'roles', 'birth', 'sex', 'phone', 'deletedAt', 'address'],
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Thành công!" : "Không tìm thấy User",
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
            mes: response ? "Cập nhật thành công!" : "Cập nhật thất bại!",
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
            mes: response ? "Xóa thành công!" : "Lỗi! Chưa thể xóa, hãy thử lại",
            staffData: response,
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
            mes: response ? "Xóa vĩnh viễn thành công!" : "Xóa vĩnh viễn thất bại! Hãy thử lại.",
            staffData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const restoreUserByIdService = ({ id }) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.restore({
            where: {
                id,
            },
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Hoàn tác thành công!" : "Hoàn tác thất bại!",
            staffData: response,
        })
    } catch (error) {
        reject(error)
    }
});

module.exports = { getAllUserService, getAllUserSoftDeteleService, getUserByIdService, updateUserByIdService, softDeleteUserbyIdService, hardDeleteUserbyIdService, restoreUserByIdService };
