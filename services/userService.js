const CODE = require('../helper/statusCode');
const { User } = require('../models');
const validations = require('./validations');
const { ValidateException } = require('./validations');

const createUser = async (displayName, email, password, image) => {
  const { error } = validations.dataUser({ displayName, email, password, image });
  if (error) throw new ValidateException(error.message);

  await User.create({ displayName, email, password, image });
  return { statusCode: CODE.CREATED };
};

module.exports = {
  createUser,
};