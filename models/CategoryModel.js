module.exports = (sequelize, DataTypes) => sequelize.define(
  'Category',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      // autoIncrement is needed for return
      // id value (not null) on create method
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);