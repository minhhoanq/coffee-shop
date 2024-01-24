const db = require("../models");

const addToCartItemService = (user,{ quantity, priceId, note }) => new Promise(async (resolve, reject) => {
    try {

        if(!user) {
            reject({
                err: 1,
                mes: 'Vui lòng đăng nhập để sử dụng các chức năng này!',
            });
            return;
        }

        const [newCart, createdCart] = await db.Cart.findOrCreate({
            where: {
                id: user.id,
                userId: user.id
            },
        });

        if(!priceId || !quantity) {
            reject({
                err: 1,
                mes: "Thiếu thông tin!"
            })
        }
        const [newCartItem, createdCartItem] = await db.Cart_Item.findOrCreate({
            where: {
                cartId: newCart.id,
                priceId: priceId,
            },
            defaults: {
                quantity: quantity,
                priceId: priceId,
                note: note
            },
        });

        if(!createdCartItem) {
            await db.Cart_Item.update({
                    quantity: quantity,
                    note: note
                }, { 
                    where: {
                        cartId: cart.id,
                        priceId: priceId,
                    },
                }
            );
        };

        return resolve({
            err: newCartItem ? 0 : 1,
            mes: newCartItem ? "Thêm sản phẩm vô giỏ hàng thành công." : "Thêm sản phẩm vô giỏ hàng thất bại!",
            cartItem: newCartItem,
        });
    } catch (error) {
        return reject(error);
    }
});

const deleteCartItemByIDService = (user, body) => new Promise(async (resolve, reject) => {
    try {
        console.log(body)
        if(!user) {
            reject({
                err: 1,
                mes: 'Vui lòng đăng nhập để sử dụng các chức năng này!',
            });
            return;
        }

        if(!body.productSizeId) {
            reject({
                err: 1,
                mes: 'Thiếu thông tin!',
            });
            return;
        }

        const cart = await db.Cart.findOne({
            where: { userId: user.id }
        });

        const response = await db.Cart_Item.destroy({
            where: {
                cartId: cart.id,
                productSizeId: body.productSizeId,
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Xóa thành công sản phẩm này trong giỏ hàng." : "Xảy ra lỗi xóa sản phẩm trong giỏ hàng, hãy thử lại sau vài phút!",
            productData: response   
        })
    } catch (error) {
        reject(error);
    }
});

const getCartItemByIDService = (user) => new Promise(async (resolve, reject) => {
    const id = user.id;
    try {

        const cart = await db.Cart.findOne({
            where: {
                userId: id
            }
        });

        const response = await db.Cart_Item.findAll({
            where: {cartId: cart.id},
            include: [
                {
                    model: db.Price,
                    as: 'priceData',
                    attributes: ['id', 'productSizeId', 'price'],
                    include: [
                        {
                            model: db.Product_Size,
                            as: 'productSizePrice',
                            attributes: ['id', 'productId', 'sizeId'],
                            include: [
                                {
                                    model: db.Product,
                                    as: 'productData',
                                    attributes: ['id', 'productName', 'productDescription', 'productImg'],
                                },
                                {
                                    model: db.Size,
                                    as: 'sizeData',
                                    attributes: ['id', 'sizeName'],
                                }
                            ]
                        }
                    ]
                    // include: [
                    //     {
                    //         model: db.Product,
                    //         as: 'productData',
                    //         attributes: ['id', 'productName', 'productDescription', 'productImg'],
                    //     },
                    //     {
                    //         model: db.Size,
                    //         as: 'sizeData',
                    //         attributes: ['id', 'sizeName'],
                    //     }
                    // ]
                },
                {
                    model: db.Cart,
                    as: 'cartData',
                    attributes: ['id', 'userId'],
                }
            ]
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Got" : "Can't found product",
            productData: response   
        })
    } catch (error) {
        reject(error);
    }
})

const deleteAllCartItemService = (user) => new Promise(async (resolve, reject) => {
    try {
        if(!user) {
            reject({
                err: 1,
                mes: 'Vui lòng đăng nhập để sử dụng các chức năng này!',
            });
            return;
        }

        const cart = await db.Cart.findOne({
            where: { userId: user.id }
        });

        const response = await db.Cart_Item.destroy({
            where: {
                cartId: cart.id
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Xóa thành công tất cả sản phẩm này trong giỏ hàng." : "Xảy ra lỗi xóa tất cả sản phẩm trong giỏ hàng, hãy thử lại sau vài phút!",
            productData: response   
        })
    } catch (error) {
        reject(error);
    }
});

module.exports = { addToCartItemService, deleteCartItemByIDService, getCartItemByIDService, deleteAllCartItemService};
