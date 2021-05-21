module.exports = (sequelize, DataTypes) => sequelize.define(
  'Category',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);