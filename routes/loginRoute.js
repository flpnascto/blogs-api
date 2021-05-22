const router = require('express').Router();
const Login = require('../controllers/loginController');

router.route('/')
  .get()
  .post(Login)
  .put()
  .delete();

module.exports = router;