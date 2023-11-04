const db = require("../models");
const { Op } = require("sequelize");
const slugtify = require('slugify');
const similarity = require( 'compute-cosine-similarity' );

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
                    attributes: ['id','slug', 'productName', 'categoryId', 'productDescription', 'productImg', 'price'],
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

const ratingProductService = (user, { slug }, body) => new Promise(async(resolve, reject) => {
    try {
        const userId = user.id;
        const {star, comment} = body;

        if(!userId || !star) {
            reject({
                err: "Vui lòng đánh giá sản phẩm trước!",
            });
            return;
        }
        
        const product = await db.Product.findOne({
            where: {
                slug: slug,
            }
        });

        const [ratingProduct, created] = await db.Rating.findOrCreate({
            where: {
                userId: userId,
                productId: product.id,
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
                    productId: product.id,
                }
            });
        }

        resolve({
            err: ratingProduct ? 0 : 1,
            mes: ratingProduct ? "Cảm ơn bạn đã để lại trải nghiệm của mình." : "Lỗi, hãy thử lại sau!",
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
            },
            include: [
                {
                    model: db.User,
                    as: 'userData',
                    attributes: ['id', 'username'],
                }
            ]
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Lấy thành công Đánh Giá sản phẩm" : "Có lỗi xảy ra, vui lòng thử lại!",
            ratingsData: response
        })
    } catch (error) {
        reject(error);
    }
});

const deleteRatingProductService = (user, { slug }) => new Promise( async(resolve, reject) => {
    try {
        const userId = user.id;
        if(!userId || !slug) {
            reject({
                err: 1,
                mes: "Thiếu thông tin!",
            })
        }
        
        const product = await db.Product.findOne({
            where: {
                slug: slug,
            }
        });

        const response = await db.Rating.destroy({
            where: {
                userId: userId,
                productId: product.id,
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Xóa đánh giá thành công.' : 'Xảy ra khi xóa đánh giá này, hãy thử lại sau ít phút!',
            deleteRating: response
        });
    } catch (error) {
        reject(error);
    }
})


// ===================================================================================== //

//
const createUserProductMatrix = (ratings, users) => {
    const user_product = ratings;

    //Create User Product Matrix
    for (let i = 0; i < users.length; i++) {
        let sum = 0;
        let count = 0;
        ratings.filter(e => {
            if(e[0] == i) {
                sum += Number(e[2]);
                count++;
            }
        })
        // console.log(sum + " | " + count);
        user_product.forEach(e => {
            if(e[0] == i) {
                e[2] = (e[2] - (sum / count).toFixed(2));
            }
        })
    }

    return user_product;
}

//
const CVUserProduct2Dimensional = (user_product, users, products) => {
    const array = [];
    for(let i = 0; i < users.length; i++) {
        array[i] = [0];
        for (let j = 0; j < products.length; j++) {
            array[i][j] = 0;
            user_product.forEach(e => {
                if(e[0] == i && e[1] == j) {
                    array[i][j] = e[2];
                }
            })
        }
    }
    return array;
}

const createSimilarUsersMatrix = (user_product_2d, products, users) => {
    const similar_users = [];
    for(let i = 0; i < user_product_2d.length; i++) {
        similar_users[i] = [1];
        for(let j = 0; j < user_product_2d.length; j++) {
            similar_users[i][j] = similarity(user_product_2d[i], user_product_2d[j]);
        }
    }
    return similar_users;
}

const inverseMatrix = (arr, users, products) => {
    const array = [];
    for (let i = 0; i < products.length; i++) {
        array[i] = []
        for (let j = 0; j < users.length; j++) {
                array[i][j] = arr[j][i]
        }
    }

    return array;
}

const scoreItems = (user_product_2dx, user_picked) => {
    const score_items = [];
    user_picked[0].splice(4, 1);
    console.log(user_picked[0])
    for (let i = 0; i < user_product_2dx.length; i++) {
        let score = 0;
        let count = 0;
        let total = 0;
        const movie_rating = user_product_2dx[i];
        for (let j = 0; j < user_picked[0].length; j++) {
            score = movie_rating[j] * user_picked[0][j];
            total += score;
            count++;
        }
        score_items[i] = total / count;
    }

    return score_items;
}

//RecommendSystemService
const recommendSystemService = () => new Promise(async(resolve, reject) => {
    try {
        const ratingData = await db.Rating.findAll();

        const users = [];
        // const products = [];
        const products = ["1", "2","3", "4", "5"];
        const ratings = [];

        ratingData.forEach(element => {
            const user = element.userId;
            const product = element.productId;
            const rating = element.star;

            if (!users.includes(user)) {
                users.push(user);
            }

            // if (!products.includes(product)) {
            //     products.push(product);
            // }

            ratings.push([users.indexOf(user), products.indexOf(product), rating]);
        });

        // products = ["1", "2", "3", "4"];

        //create user-product matrix
        const user_product = createUserProductMatrix(ratings, users);

        //convert user-product matrix to 2 dimensional
        const user_product_2d = CVUserProduct2Dimensional(user_product, users, products);

        //create similar users matrix
        const similar_users = createSimilarUsersMatrix(user_product_2d, products, users);

        //inverse matrix, use similarity lib
        const user_product_2dx = inverseMatrix(user_product_2d, users, products);

        //Movies that similar users watched. Remove movies that none of the similar users have watched

        //remove products user bought
        const cartId = await db.Cart.findOne({
            where: {
                userId: 1
            }
        });

        const cartItem = await db.Cart_Item.findAll({
            where: {
                cartId: cartId.id
            }
        });

        const productIdUser = [];
        const arr = [];
        for(let i = 0; i < cartItem.length; i++) {
            const data = await db.Product_Size.findOne({
                where: {
                    id: cartItem[i].productSizeId
                }
            })

            if(arr.length > 0) {
                let check = false;
                arr.forEach(e => {
                    if(e !== data.productId) {
                        check = true
                    } else {
                        check = false
                    }
                })
                arr.push(data.productId);

                if(check) {
                    productIdUser.push(data);
                }
            } else {
                productIdUser.push(data);
                arr.push(data.productId);
            }
        }

        const productDataUser = [];
        for (let i = 0; i < productIdUser.length; i++) {
            const data = await db.Product.findOne({
                where: {
                    id: productIdUser[i].productId
                }
            });

            productDataUser.push(data);
        }

        //remove products user picked rated.
        user_product_2d[4].forEach((e, index) => {
            console.log(e)
            if(e != 0) {
                // user_product_2dx.splice(index - i, 1);
                for (let j = 0; j < users.length; j++) {
                    delete user_product_2dx[index][j];
                }
            }
        })
        // 0 1 2 3 4
        // 1 2 3 4
        // 2 3 4
        // 

        // const arrtemp = user_product_2d.filter(e => (

        // ))

        //get user is picked
        // const user = user.id;
        const user_picked = similar_users.splice(4, 1);

        //prepare score for items with similar users and user picked
        const score_items = scoreItems(user_product_2dx, user_picked)

        const recommend = [];
        for (let i = 0; i < products.length; i++) {
            recommend.push({id: products[i], score_item: score_items[i]})
        }

        score_items.sort((a, b) => b - a);

        const productsRecommend = [];
        for (let i = 0; i < score_items.length; i++) {
            for (let j = 0; j < recommend.length; j++) {
                if(score_items[i] == recommend[j].score_item && score_items[i] > 0) {
                    productsRecommend.push(await db.Product.findByPk(recommend[j].id))
                }
            }
        }

        resolve({
            err: "err",
            mes: "mes",
            // test: productDataUser[1].id,
            user_picked: products,
            users: user_product_2d,
            arr: user_product_2dx,
            // ratings: ratings,
            // score_items: score_items,
            products: recommend,
            productsRecommend: productsRecommend
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = { 
    getProductsService, 
    getProductDetailService, 
    getProductByCategoryService, 
    createProductService, 
    ratingProductService, 
    getAllRatingsProductService,
    deleteRatingProductService,
    recommendSystemService
};