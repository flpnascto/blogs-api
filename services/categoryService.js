const CODE = require('../helper/statusCode');
const { Category } = require('../models');
const validations = require('./validations');
const { ValidateException } = require('./validations');

const createCategory = async (name) => {
  const { error } = validations.dataCategory({ name });
  if (error) throw new ValidateException(error.message);

  const newCategory = await Category.create({ name });

  return { statusCode: CODE.CREATED, newCategory };
};

module.exports = {
  createCategory,
};