const db = require("../models");

const postAddToCartItemService = ({cartId, productSizeId, quantity, price, note}) => new Promise(async (resolve, reject) => {
    try {
        const existCartItem = await db.Cart_Item.findOne({
                where: {cartId : cartId, productSizeId: productSizeId},
            }
        );
        if(existCartItem) {
            return reject(
                {
                    err: 1,
                    msg: "Sản phẩm đã có trong giỏ hàng."
                }
            )
        };

        const newCartItem = {
            cartId,
            productSizeId,
            quantity,
            price,
            note
        };

        const response = await db.Cart_Item.create(newCartItem);

        return resolve({
            err: response ? 0 : 1,
            mes: response ? "Got it" : "Can't found product",
            productData: response,
        });
    } catch (error) {
        return reject({
            err: 1
        });
    }
});

const getCartItemByIDService = ({cartId}) => new Promise(async (resolve, reject) => {
    try {
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

module.exports = { postAddToCartItemService, getCartItemByIDService};
