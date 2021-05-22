const CODE = require('../../helper/statusCode');

function ValidateException(message, statusCode = CODE.BAD_REQUEST) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = ValidateException;
