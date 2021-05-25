const router = require('express').Router();
const blogPost = require('../controllers/blogPostController');
const auth = require('../controllers/authController');

router.route('/')
  .get(auth, blogPost.getAllBlogPost)
  .post(auth, blogPost.addBlogPost)
  .put()
  .delete();

router.route('/:id')
  .get(auth, blogPost.getBlogPostById)
  .post()
  .put(auth, blogPost.updateBlogPost)
  .delete();

router.route('/search')
  .get()
  .post()
  .put()
  .delete();

module.exports = router;