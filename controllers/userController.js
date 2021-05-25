const User = require('../services/userService');
const { generateToken } = require('../helper/authManager');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const { statusCode } = await User.createUser(displayName, email, password, image);
    const token = generateToken(email);
    res.status(statusCode).json({ token });
  } catch (error) {
    console.log('Controller error:', error.message);
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const { statusCode, users } = await User.getAllUsers();
    res.status(statusCode).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { statusCode, user } = await User.getUserById(id);
    res.status(statusCode).json(user);
  } catch (error) {
    next(error);
  }
};

const removeUser = async (req, res, next) => {
  const { email } = res.locals;

  try {
    const { statusCode } = await User.removeUser(email);
    res.status(statusCode).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  removeUser,
};