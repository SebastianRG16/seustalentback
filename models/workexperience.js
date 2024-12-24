"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workexperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      workexperience.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  workexperience.init(
    {
      works: { type: DataTypes.JSON },
      informationWork: { type: DataTypes.JSON },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "workexperience",
    }
  );
  return workexperience;
};
