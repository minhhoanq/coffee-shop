const db = require("../models")
const { Op } = require("sequelize");

const getAllUserService = ({page, limit, order, username, firstname, lastname, ...query}) => new Promise( async(resolve, reject) => {
    try {
        const queries = { raw: true, nest: true};
        const offset = (!page || +page <=1) ? 0 : (+page - 1);
        const flimit = +limit || +process.env.LIMIT_PRODUCT;
        queries.offset = offset * flimit;
        queries.limit = flimit;
        if(order) queries.order = [order];
        if(username) query.username = { [Op.substring]: username };
        if(firstname) query.firstname = { [Op.substring]: firstname };
        if(lastname) query.lastname = { [Op.substring]: lastname };
        
        const response = await db.User.findAndCountAll({
            where: query,
            ...queries,
            attributes: ['id', 'email', 'username', 'firstname', 'lastname', 'roles', 'sex', 'phone', 'address', 'updatedAt'],
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Thành công!" : "Không tìm thấy Users!",
            data: response,
        })
    } catch (error) {
        reject(error)
    }
});

const getUserProfileService = (user, token) => new Promise( async(resolve, reject) => {
    const id = user.id;
    const generateAccessToken = token.split(" ")[1];
    if(!id) reject("Chưa nhận được id User");
    try {
        const response = await db.User.findOne({
            where: {
                id
            },
            attributes: 
                ['id',
                 'email',
                 'username', 
                 'firstname',
                 'lastname',
                 'roles', 
                 'sex',
                 'phone',
                 'birth', 
                 'address', 
                 'image',
                 'createdAt',
                 'updatedAt'
                ],
        });

        resolve({
            success: true,
            dataUser: response, 
            token: generateAccessToken
        })
    } catch (error) {
        reject(error)
    }
})

const getUserAddressListService = (user) => new Promise( async(resolve, reject) => {
    const id = user.id;
    if(!id) reject("Chưa nhận được id User");
    try {
        const user_addresses = await db.Address.findAll({
            where: {
                userid: id,
            },
            order: [ [ 'is_delivery_address', 'DESC' ] ],
            include: [
                {
                    model: db.User,
                    as: 'userData',
                    attributes: ['id',
                                'username',
                                'firstname',
                                'lastname'],
                }
            ]
        });

        resolve({
            err: user_addresses ? 0 : 1,
            mes: user_addresses ? 'Lấy danh sách địa chỉ thành công.' : 'Lỗi, hãy thử lại sau!',
            data: user_addresses
        })
    } catch (error) {
        reject(error)
    }
})

//create_user_address
//set_default_address
//update_user_address
//delete_user_address

const createUserAddressListService = (user, addressData) => new Promise(async(resolve, reject) => {
    try {
        const { country = "Việt Nam", city_province, district, ward, address, postal_code, address_instruction, is_delivery_address} = addressData;
        const userId = user.id;

        const { count, rows } = await db.Address.findAndCountAll({
            where: {
                userid: userId
            }
        })
        

        if(count === 0) {
            addressData.is_delivery_address = true;
            console.log("count : " + count);
        }

        // console.log("count : " + count);
        

        const [createAddress, created] = await db.Address.findOrCreate({
            where: {
                userid: userId,
                country: country,
                city_province: city_province,
                district: district,
                ward: ward,
                address: address,
            },
            defaults: {
                userId: userId,
                country: country,
                city_province: city_province,
                district: district,
                ward: ward,
                address: address,
                address_instruction: address_instruction,
                postal_code: postal_code,
                is_delivery_address: addressData.is_delivery_address
            }
        })


        
        resolve({
            err: createAddress ? 0 : 1,
            mes: createAddress ? 'Thêm địa chỉ mới thành công.' : 'Lỗi, hãy thử lại sau!',
            data: createAddress
        })
    } catch (error) {
        reject(error);
    }
});

//Update User Address

const updateUserAddressService = (user, addressData) => new Promise(async(resolve, reject) => {
    try {
        const {id, country, city, city_province, district, address, address_instruction, postal_code} = addressData;
        const userid = user.id;

        const updateUserAddress = db.Address.update(
            {
                country: country,
                city: city, 
                city_province: city_province, 
                district: district, 
                address: address, 
                address_instruction: address_instruction, 
                postal_code: postal_code
            }, {
                where: {
                    userid: userid,
                    id: id,
                }
            }
        )

        resolve({
            err: updateUserAddress ? 0 : 1,
            mes: updateUserAddress ? 'Cập nhật địa chỉ thành công.' : 'Lỗi, hãy thử lại sau!',
            data: updateUserAddress
        })
    } catch (error) {
        reject(error)
    }
})

//Delete User Address

const deleteUserAddressService = (user, addressData) => new Promise(async(resolve, reject) => {
    try {
        const userid = user.id;
        const { addressid } = addressData;

        const deleteUserAddress = await db.Address.destroy({
            where: {
                userid: userid,
                id: addressid,
                is_delivery_address: false
            }
        });

        resolve({
            err: deleteUserAddress ? 0 : 1,
            mes: deleteUserAddress ? 'Xóa địa chỉ thành công.' : 'Lỗi, hãy thử lại sau!',
            data: deleteUserAddress
        })
    } catch (error) {
        reject(error);
    }
})

const setDefaultAddressService = (user, addressData) => new Promise(async(resolve, reject) => {
    try {
        const userid = user.id;
        const { id } = addressData;
        console.log("id", id)
        const is_delivery_address_prev = await db.Address.update(
            {
                is_delivery_address: false,
            }, {
                where: {
                    userid: userid
                }
            }
        )

        const is_delivery_address_next = await db.Address.update(
            {
                is_delivery_address: true,
            }, {
                where: {
                    id: id,
                    userid: userid,
                }
            }
        )

        resolve({
            err: is_delivery_address_prev && is_delivery_address_next ? 0 : 1,
            mes: is_delivery_address_prev && is_delivery_address_next ? "Thành công!" : "Lỗi! Hãy thử lại sau.",
        })
    } catch (error) {
        reject(error)
    }
})

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

//Update user by id by admin

//Update user by id
const updateUserByIdService = ({ user, id }) => new Promise(async(resolve, reject) => {
    if(!id || Object.keys(user).length === 0) reject("Chưa nhận được id user!");
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
        reject({
            err: 1,
            mes: 'Xảy ra lỗi, hãy thử lại sau!'
        });
    }
});

const updateUserByUserService = ({id},  user, avatar ) => new Promise( async(resolve, reject) => {
    if(!id || Object.keys(user).length === 0) reject("Chưa nhận được id user!");
    const { email, username, password, firstname, lastname, sex, phone, birth, address } = user;
    const data = { email, username, password, firstname, lastname, sex, phone, birth, address }
    if(avatar) data.image = avatar.path;
    try {
            //
            const response = await db.User.update( data, {
                where: {id},
            });
        resolve({
            err: response ? 0 : 1,
            mes: response ? "Cập nhật thành công!" : "Cập nhật thất bại!",
            data: response,
        })
    } catch (error) {
        reject(error);
    }
}) 

const softDeleteUserbyIdService = ({ id }) => new Promise( async(resolve, reject) => {
    if(!id) reject("Chưa nhận được id user!");
    try {
        const response = await db.User.destroy({
            where: {
                id,
            },
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Xóa thành công!" : "Lỗi! Chưa thể xóa, hãy thử lại",
            softDeleteData: response,
        })
    } catch (error) {
        reject(error)
    }
});

const hardDeleteUserbyIdService = ({ id }) => new Promise( async(resolve, reject) => {
    if(!id) reject("Chưa nhận được id user!");
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
    if(!id) reject("Chưa nhận được id user!");
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

module.exports = { 
    getAllUserService,
    getUserProfileService,
    getUserAddressListService,
    createUserAddressListService,
    updateUserAddressService,
    deleteUserAddressService,
    setDefaultAddressService,
    getAllUserSoftDeteleService, 
    getUserByIdService, 
    updateUserByIdService, 
    softDeleteUserbyIdService, 
    hardDeleteUserbyIdService, 
    restoreUserByIdService,
    updateUserByUserService
};
