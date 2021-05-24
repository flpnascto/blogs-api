const BlogPost = require('../services/blogPostService');

const addBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { email } = res.locals;

  try {
    const { statusCode, newBlogPost } = await BlogPost
      .addBlogPost(email, title, content, categoryIds);
    res.status(statusCode).json(newBlogPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBlogPost,
};