const CODE = require('../helper/statusCode');
const { User, BlogPost } = require('../models');
const validations = require('./validations');
const { ValidateException } = require('./validations');

const getUserId = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  return id;
};

const createBlogPost = async (title, content, userId) => {
  const published = new Date();
  const updated = published;
  const newBlogPost = await BlogPost.create({ title, content, userId, published, updated });
  return newBlogPost;
};

const addBlogPost = async (email, title, content, categoryIds) => {
  const { error } = validations.dataBlogPost({ title, content });
  if (error) throw new ValidateException(error.message);

  const userId = await getUserId(email);
  const newBlogPost = await createBlogPost(title, content, userId);
  ['published', 'updated'].forEach((e) => delete newBlogPost.dataValues[e]);

  return { statusCode: CODE.CREATED, newBlogPost };
};

module.exports = {
  addBlogPost,
};