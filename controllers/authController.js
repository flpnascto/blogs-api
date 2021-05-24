const auth = require('../services/authService');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = await auth(token);
    res.locals.email = payload.username;
  } catch (error) {
    next(error);
  }

  next();
};
