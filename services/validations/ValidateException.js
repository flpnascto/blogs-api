const CODE = require('../../helper/statusCode');

function ValidateException(message) {
  const error = new Error(message);
  error.statusCode = CODE.BAD_REQUEST;
  return error;
}

module.exports = ValidateException;
