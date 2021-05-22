const User = require('../services/userService');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const { statusCode } = await User.createUser(displayName, email, password, image);
    res.status(statusCode).json({ token: 'VaLoRdOtOk3N' });
  } catch (error) {
    console.log('Controller error:', error.message);
    next(error);
  }
};

module.exports = {
  createUser,
};