const Category = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const { statusCode, newCategory } = await Category.createCategory(name);
    res.status(statusCode).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const { statusCode, categories } = await Category.getAllCategories();
    res.status(statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};