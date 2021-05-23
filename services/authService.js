const CODE = require('../helper/statusCode');
const { ValidateException } = require('./validations');
const { verifyToken } = require('../helper/authManager');

module.exports = (token) => {
  if (!token) throw new ValidateException('Token not found', CODE.UNAUTHORIZED);

  const { payload, error } = verifyToken(token);

  if (error) throw new ValidateException('Expired or invalid token', CODE.UNAUTHORIZED);

  return payload;
};