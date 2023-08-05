const db = require("../models");

const addToCartItemService = ({cartId, productSizeId, quantity, price, note}) => new Promise(async (resolve, reject) => {
    try {
        // const existCartItem = await db.Cart_Item.findOne({
        //         where: {cartId : cartId, productSizeId: productSizeId},
        //     }
        // );

        const [newCartItem, createdCartItem] = await db.Cart_Item.findOrCreate({
            where: {
                cartId: cartId,
                productSizeId: productSizeId
            },
            defaults: {
                quantity: quantity,
                price: price,
                note: note
            }
        });

        if(!createdCartItem) {
            await db.Cart_Item.update({
                quantity: quantity,
                price: price,
                note: note
            }, { where: {
                cartId: cartId,
                productSizeId: productSizeId
            }
        });
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

const getCartItemByIDService = ({userId}) => new Promise(async (resolve, reject) => {
    try {

        const cart = await db.Cart.findOne

        const response = await db.Cart_Item.findAll({
            where: {cartId: cartId},
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

module.exports = { addToCartItemService, getCartItemByIDService};
