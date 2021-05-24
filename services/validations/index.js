const dataUser = require('./userValidation');
const dataLogin = require('./loginValidation');
const dataCategory = require('./categoryValidation');
const dataBlogPost = require('./blogPostValidation');
const ValidateException = require('./ValidateException');

module.exports = {
  dataUser,
  dataLogin,
  dataCategory,
  dataBlogPost,
  ValidateException,
};