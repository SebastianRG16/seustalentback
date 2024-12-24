"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class academicformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      academicformation.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  academicformation.init(
    {
      formation: { type: DataTypes.JSON },
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
      modelName: "academicformation",
    }
  );
  return academicformation;
};
