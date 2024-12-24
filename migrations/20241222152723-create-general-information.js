"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("generalInformations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      salary: {
        type: Sequelize.STRING,
      },
      levelProfessional: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      profession: {
        type: Sequelize.STRING,
      },
      specialization: {
        type: Sequelize.STRING,
      },
      document: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      relocation: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      cellphone: {
        type: Sequelize.STRING,
      },
      linkedin: {
        type: Sequelize.STRING,
      },
      addedValue: {
        type: Sequelize.STRING,
      },
      happyWork: {
        type: Sequelize.STRING,
      },
      professionalTalent: {
        type: Sequelize.STRING,
      },
      projectExperience: {
        type: Sequelize.STRING,
      },
      supplementaryData: {
        type: Sequelize.STRING,
      },
      skills: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("generalInformations");
  },
};
