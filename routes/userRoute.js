const router = require('express').Router();
const user = require('../controllers/userController');

router.route('/')
  .get()
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