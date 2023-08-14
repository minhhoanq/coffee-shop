const db = require("../models");

const addToCartItemService = (user,{ productSizeId, quantity, price, note}) => new Promise(async (resolve, reject) => {
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

        if(!productSizeId || !quantity || !price) {
            reject({
                err: 1,
                mes: "Thiếu thông tin!"
            })
        }
        const [newCartItem, createdCartItem] = await db.Cart_Item.findOrCreate({
            where: {
                cartId: cart.id,
                productSizeId: productSizeId
            },
            defaults: {
                quantity: quantity,
                price: price,
                note: note
            },
        });

        if(!createdCartItem) {
            await db.Cart_Item.update({
                    quantity: quantity,
                    price: price,
                    note: note
                }, { 
                    where: {
                        cartId: cart.id,
                        productSizeId: productSizeId
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

const getCartItemByIDService = ({id}) => new Promise(async (resolve, reject) => {
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
                    model: db.Product_Size,
                    as: 'productSizeData',
                    attributes: ['id', 'productId', 'sizeId'],
                    include: [
                        {
                            model: db.Product,
                            as: 'productData',
                            attributes: ['id', 'productName', 'price', 'productDescription', 'productImg'],
                        },
                        {
                            model: db.Size,
                            as: 'sizeData',
                            attributes: ['id', 'sizeName'],
                        }
                    ]
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
