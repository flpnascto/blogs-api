const User = require('../services/userService');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { statusCode, token } = await User.login(email, password);
    res.status(statusCode).json({ token });
  } catch (error) {
    next(error);
  }
};
