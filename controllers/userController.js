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

module.exports = {
  createUser,
};