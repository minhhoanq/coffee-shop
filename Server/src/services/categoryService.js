const db = require("../models");

const getAllCategoryService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Category.findAll();

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Lấy thành công Category." : "Lấy thất bại Category!",
            CategoryData: response
        })
    } catch (error) {
        reject(error);
    }
});

const createCategoryService = (body) => new Promise(async(resolve, reject) => {
    try {
        const { categoryName } = body;
        if(!categoryName){
            reject({err: "Vui lòng nhập thông tin!"});
            return;
        }
        const response = await db.Category.findOrCreate({
            where: {
                categoryName: categoryName
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Tạo mới thành công Category." : "Tạo mới thất bại Category!",
            CategoryData: response
        })
    } catch (error) {
        reject(error);
    }
});

const deleteCategoryService = (params) => new Promise(async(resolve, reject) => {
    try {
        const { id } = params;
        if(!id){
            reject({err: "Vui lòng nhập thông tin!"});
            return;
        }
        const response = await db.Category.destroy({
            where: {
                id: id
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Xóa thành công Category." : "Xóa thất bại Category!",
            CategoryData: response
        })
    } catch (error) {
        reject(error);
    }
});

const updateCategoryService = (params, body) => new Promise(async(resolve, reject) => {
    try {
        const { id } = params;
        const { categoryName } = body;
        if(!id){
            reject({err: "Vui lòng nhập thông tin!"});
            return;
        }
        const response = await db.Category.update(
            {
                categoryName: categoryName
            },{
            where: {
                id: id
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Cập nhật thành công Category." : "Cập nhật thất bại Category!",
            CategoryData: response
        })
    } catch (error) {
        reject(error);
    }
});

module.exports = { getAllCategoryService, createCategoryService, deleteCategoryService, updateCategoryService };