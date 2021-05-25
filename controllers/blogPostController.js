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

const getBlogPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { statusCode, blogPost } = await BlogPost.getBlogPostById(id);
    res.status(statusCode).json(blogPost);
  } catch (error) {
    next(error);
  }
};

const updateBlogPost = async (req, res, next) => {
  const { email } = res.locals;
  const dataPost = req.body;
  const { id } = req.params;
  try {
    const { statusCode, updatePost } = await BlogPost.updateBlogPost(email, dataPost, id);
    ['published', 'updated'].forEach((e) => delete updatePost[0].dataValues[e]);
    res.status(statusCode).json(updatePost[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBlogPost,
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
};