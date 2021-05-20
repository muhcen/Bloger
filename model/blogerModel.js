const { DataTypes } = require("sequelize");
const sequelize = require("./../config/config");

const Bloger = sequelize.define(
  "Bloger",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
(async () => {
  await Bloger.sync({ force: true });
})();

module.exports = Bloger;
