module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.defina('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsToMany(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPost;
};