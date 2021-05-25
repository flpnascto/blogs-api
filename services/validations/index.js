const dataUser = require('./userValidation');
const dataLogin = require('./loginValidation');
const dataCategory = require('./categoryValidation');
const dataBlogPost = require('./blogPostValidation');
const dataUpdatePost = require('./updatePostValidation');
const ValidateException = require('./ValidateException');

module.exports = {
  dataUser,
  dataLogin,
  dataCategory,
  dataBlogPost,
  dataUpdatePost,
  ValidateException,
};