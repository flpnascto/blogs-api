const dataUser = require('./userValidation');
const dataLogin = require('./loginValidation');
const dataCategory = require('./categoryValidation');
const ValidateException = require('./ValidateException');

module.exports = {
  dataUser,
  dataLogin,
  dataCategory,
  ValidateException,
};