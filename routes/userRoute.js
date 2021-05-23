const router = require('express').Router();
const user = require('../controllers/userController');
const auth = require('../controllers/authController');

router.route('/')
  .get(auth, user.getAllUsers)
  .post(user.createUser)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put()
  .delete();

router.route('/me')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;