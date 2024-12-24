"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class generalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      generalInformation.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  generalInformation.init(
    {
      salary: DataTypes.STRING,
      levelProfessional: DataTypes.STRING,
      name: DataTypes.STRING,
      profession: DataTypes.STRING,
      specialization: DataTypes.STRING,
      document: DataTypes.STRING,
      city: DataTypes.STRING,
      relocation: DataTypes.STRING,
      email: DataTypes.STRING,
      cellphone: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      addedValue: DataTypes.STRING,
      happyWork: DataTypes.STRING,
      professionalTalent: DataTypes.STRING,
      projectExperience: DataTypes.STRING,
      supplementaryData: DataTypes.STRING,
      skills: DataTypes.STRING,
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
      modelName: "generalInformation",
    }
  );
  return generalInformation;
};
