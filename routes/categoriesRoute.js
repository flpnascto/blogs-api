const router = require('express').Router();
const category = require('../controllers/categoryController');
const auth = require('../controllers/authController');

router.route('/')
  .get()
  .post(auth, category.createCategory)
  .put()
  .delete();

module.exports = router;