const { response } = require("express");
const categoryService = require("../services/categoryService");

const categoryController = {
    getAllCategory: async(req, res) => {
        try {
            const response = await categoryService.getAllCategoryService();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    createCategory: async(req, res) => {
        try {
            const response = await categoryService.createCategoryService(req.body);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteCategory: async(req, res) => {
        try {
            const response = await categoryService.deleteCategoryService(req.params);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateCategory: async(req, res) => {
        try {
            const response = await categoryService.updateCategoryService(req.params, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = categoryController;