const router = require('express').Router();

router.route('/')
  .get()
  .post()
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