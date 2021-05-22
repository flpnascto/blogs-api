const CODE = require('../helper/statusCode');
const { User } = require('../models');
const validations = require('./validations');
const { ValidateException } = require('./validations');
const { generateToken } = require('../helper/authManager');

const createUser = async (displayName, email, password, image) => {
  const { error } = validations.dataUser({ displayName, email, password, image });
  if (error) throw new ValidateException(error.message);

  const user = await User.findOne({ where: { email } });
  if (user) throw new ValidateException('User already registered', CODE.CONFLICT);

  await User.create({ displayName, email, password, image });
  return { statusCode: CODE.CREATED };
};

const login = async (email, password) => {
  const { error } = validations.dataLogin({ email, password });
  if (error) throw new ValidateException(error.message);

  const user = await User.findOne({ where: { email, password } });
  if (!user) throw ValidateException('Invalid fields');

  const token = generateToken(email);

  return { statusCode: CODE.OK, token };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return { statusCode: CODE.OK, users };
};

module.exports = {
  createUser,
  login,
  getAllUsers,
};