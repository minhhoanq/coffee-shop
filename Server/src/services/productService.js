const db = require("../models");
const { Op } = require("sequelize");
const slugtify = require('slugify');

const getProductsService = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
        try {
            //
            const queriess = {...req.query};
            //Tách các trường đặc biệt ra khỏi query
            const excludeFields = ['limit', 'sort', 'page', 'fields'];
            excludeFields.forEach(el => delete queriess[el]);

            //Format lại operators cho đúng với syntax Sequelize
            let queryString = JSON.stringify(queriess);
            queryString.replace(/\b(gte|gt|lt|lte)\b/g, macthedEl => `$${macthedEl}`);
            const formatedQueries = JSON.parse(queryString);

            //Filtering
            if (queriess?.productName) formatedQueries.productName = {$regex: queriess, $options: "i"};
            let queriyCommand = db.Product.find(formatedQueries);

            //Excute query
            //Số lượng sản phẩm thỏa mãn điều kiện !==  số lượng sản phẩm trả về 1 lần gọi API
            queriyCommand.exec(async(err, response) => {
                if(err) throw new Error(err.message);
                const counts = await db.Product.find(formatedQueries).countDocuments();
                resolve:({
                    success: response ? 0 : 1,
                    products: response ? response : "Err",
                    counst: counts
                })
            });

            //Sort
            //abc, egf => [abc, egf] => abc egf
            if(sort) {
                const sortBy = sort.split(',').join(' ');
                queriyCommand = queriyCommand.sort(sortBy);
            }

            //
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
                productData: response
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

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Lỗi',
            dataDetailProduct: response,
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

const createProductService = (product) => new Promise(async(resolve, reject) => {
    try {
        if(Object.keys(product).length === 0) {
            reject("Dữ liệu đầu vào chưa đầy đủ!");
            return;
        }
        if(product.productName) {
            product.slug = slugtify(product.productName, {lower: true});
        }
        const newProduct = await db.Product.create(product);
        resolve({
            err: newProduct ? 0 : 1,
            mes: newProduct ? 'Thêm mới sản phẩm thành công' : 'Thêm mới sản phẩm thất bại!',
            createProduct: newProduct,
        });
    } catch (error) {
        reject(error);
    }
})

module.exports = { getProductsService, getProductDetailService, getProductByCategoryService, createProductService };