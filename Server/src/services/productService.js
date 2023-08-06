const db = require("../models");
const { Op } = require("sequelize");
const slugtify = require('slugify');

//Pagination, filter, sort
const getProductsService = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
        try {
            const queries = { raw: true, nest: true};
            const offset = (!page || +page <=1) ? 0 : (+page - 1);
            const flimit = +limit || +process.env.LIMIT_PRODUCT;
            queries.offset = offset * flimit;
            queries.limit = flimit;
            if(order) queries.order = [order];
            if(name) query.productName = { [Op.substring]: name };
            const response = await db.Product.findAndCountAll({
                where: query,
                ...queries,
                include: [
                    {
                        model: db.Category,
                        as: 'categoryData',
                        attributes: ['id', 'categoryName'],
                    }
                ]
            });

            resolve({
                err: response ? 0 : 1,
                mes: response ? "Thành công!" : "Thất bại!",
                productData: response,
            })
        } catch (error) {
            reject(error);
        }
});

const getProductDetailService = ({slug}) => new Promise(async(resolve, reject) => {
    try {
        if(!slug) {
            reject("Không nhận được id sản phẩm!");
            return;
        }

        const product = await db.Product.findOne({
            where: {
                slug
            }
        })

        const response = await db.Product_Size.findAll({
            where: {
                productId: product.id
            },
            attributes: ['id'],
            include: [
                {
                    model: db.Product,
                    as: 'productData',
                    attributes: ['id', 'productName', 'categoryId', 'productDescription', 'productImg', 'price'],
                    include: [
                        {
                            model: db.Category,
                            as: 'categoryData',
                            attributes: ['id', 'categoryName'],
                        }
                    ]
                },
                {
                    model: db.Size,
                    as: 'sizeData',
                    attributes: ['id', 'sizeName', 'sizePriceModifier'],
                }
            ]
        });
        
        const productId = response[0]?.productData.id;
        const ratingProduct = await db.Rating.findAll({
            where: {
                productId: productId
            },
            attributes: ['id', 'star', 'comment', 'productId', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: db.User,
                    as: 'userData',
                    attributes: ['id', 'username']
                }
            ]
        })

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Lỗi',
            dataDetailProduct: response,
            ratingProduct: ratingProduct,
        });
    } catch (error) {
        reject(error);
    }
});

const getProductByCategoryService = ({categoryId}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where: {categoryId},
            include: [
                {
                    model: db.Category,
                    as: 'categoryData',
                    attributes: ['id', 'categoryName'],
                }
            ]
        });
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Thất bại!',
            dataProductByCategory: response,
        })
    } catch (error) {
        reject(error);
    }
});

const createProductService = (body) => new Promise(async(resolve, reject) => {
    try {
        const {sizeId, recipeId, ...product} = body;
        if(Object.keys(product).length === 0) {
            reject("Dữ liệu đầu vào chưa đầy đủ!");
            return;
        }

        if(product.productName) {
            product.slug = slugtify(product.productName, {lower: true});
        }
        const [item, createdItem] = await db.Product.findOrCreate({
            where: product,
        });

        const newProduct_size = {
            sizeId,
            productId: item.id,
            recipeId
        }
        const [itemDetail, createdItemDetail]  = await db.Product_Size.findOrCreate({
            where: newProduct_size
        });

        if(!createdItemDetail) {
            reject({mes: "Sản phẩm đã có size tương ứng!"})
        }
        
        resolve({
            err: itemDetail ? 0 : 1,
            mes: itemDetail ? 'Thêm mới sản phẩm thành công' : 'Thêm mới sản phẩm thất bại!',
            createProductDetail: itemDetail
        });
    } catch (error) {
        reject(error);
    }
})

const ratingProductService = (user, body) => new Promise(async(resolve, reject) => {
    try {
        const userId = user.id;
        const {star, comment, productId} = body;

        if(!userId || !star) {
            reject({
                err: "Vui lòng đánh giá sản phẩm trước!",
            });
            return;
        }

        const [ratingProduct, created] = await db.Rating.findOrCreate({
            where: {
                userId: userId,
                productId: productId,
            },
            defaults: {
                star: star,
                comment: comment
            }
        });
        if(!created) {
            await db.Rating.update({
                    star: star,
                    comment: comment,
                }, { where: {
                    userId: userId,
                    productId: productId,
                }
            });
        }

        resolve({
            star: star,
            comment: comment, 
            productId: productId,
            userId: userId,
            ratingProduct: ratingProduct
        })
    } catch (error) {
        reject(error)
    }
});

const getAllRatingsProductService = ({slug}) => new Promise( async(resolve, reject) => {
    try {
        if(!slug) {
            reject({
                err: 1,
                mes: "Chưa có thông tin!",
            })
        }

        const product = await db.Product.findOne({
            where: {
                slug: slug
            }
        });

        const response = await db.Rating.findAll({
            where: {
                productId: product.id,
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Lấy thành công Đánh Giá sản phẩm" : "Có lỗi xảy ra, vui lòng thử lại!",
            ratingsData: response
        })
    } catch (error) {
        reject(error);
    }
})

module.exports = { getProductsService, getProductDetailService, getProductByCategoryService, createProductService, ratingProductService, getAllRatingsProductService };