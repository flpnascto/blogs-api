const router = require('express').Router();
const blogPost = require('../controllers/blogPostController');
const auth = require('../controllers/authController');

router.route('/')
  .get()
  .post(auth, blogPost.addBlogPost)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put()
  .delete();

router.route('/search')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;