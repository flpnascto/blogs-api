const BlogPost = require('../services/blogPostService');

const addBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { email } = res.locals;

  try {
    const { statusCode, newBlogPost } = await BlogPost
      .addBlogPost(email, title, content, categoryIds);
    ['published', 'updated'].forEach((e) => delete newBlogPost.dataValues[e]);
    res.status(statusCode).json(newBlogPost);
  } catch (error) {
    next(error);
  }
};

const getAllBlogPost = async (_req, res, next) => {
  try {
    const { statusCode, blogPosts } = await BlogPost.getAllBlogPost();
    res.status(statusCode).json(blogPosts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBlogPost,
  getAllBlogPost,
};