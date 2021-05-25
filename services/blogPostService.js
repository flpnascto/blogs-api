const Sequelize = require('sequelize');
const CODE = require('../helper/statusCode');
const { User, BlogPost, Category, PostsCategory } = require('../models');
const validations = require('./validations');
const { ValidateException } = require('./validations');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const getUserId = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  return id;
};

const createBlogPost = async (email, title, content, categoryIds) => {
  const userId = await getUserId(email);
  const published = new Date();
  const updated = published;

  const t = await sequelize.transaction();
  try {
    const newBlogPost = await BlogPost.create(
      { title, content, userId, published, updated }, { transaction: t },
    );
    const postId = newBlogPost.id;
    const newPostsCategories = categoryIds.map(async (categoryId) => {
      await PostsCategory.create({ postId, categoryId }, { transaction: t });
    });
    await Promise.all(newPostsCategories);
    await t.commit();
    return newBlogPost;
  } catch (error) {
    await t.rollback();
  }
};

const categoryExists = async (categoryIds) => {
  const categories = await Category.findAll();
  return categoryIds.every(
    (categoryId) => categories.some((category) => category.id === categoryId),
  );
};

const addBlogPost = async (email, title, content, categoryIds) => {
  const { error } = validations.dataBlogPost({ title, content, categoryIds });
  if (error) throw new ValidateException(error.message);

  const verifyCategory = await categoryExists(categoryIds);
  if (!verifyCategory) throw new ValidateException('"categoryIds" not found');

  const newBlogPost = await createBlogPost(email, title, content, categoryIds);

  return { statusCode: CODE.CREATED, newBlogPost };
};

const getAllBlogPost = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],

  });
  return { statusCode: CODE.OK, blogPosts };
};

const getBlogPostById = async (id) => {
  const blogPosts = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],

  });
  if (blogPosts.length < 1) throw new ValidateException('Post does not exist', CODE.NOTFOUND);
  const blogPost = blogPosts[0];
  return { statusCode: CODE.OK, blogPost };
};

module.exports = {
  addBlogPost,
  getAllBlogPost,
  getBlogPostById,
};