const express = require("express");
const { generalInformation } = require("../models"); // Reemplaza generalInformation con el nombre de tu modelo
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      salary,
      levelProfessional,
      name,
      profession,
      specialization,
      document,
      city,
      relocation,
      email,
      cellphone,
      linkedin,
      addedValue,
      happyWork,
      professionalTalent,
      projectExperience,
      supplementaryData,
      skills,
      userId,
    } = req.body;

    const existingRecord = await generalInformation.findOne({
      where: { userId },
    });

    if (existingRecord) {
      const updatedRecord = await generalInformation.update(
        {
          salary,
          levelProfessional,
          name,
          profession,
          specialization,
          document,
          city,
          relocation,
          email,
          cellphone,
          linkedin,
          addedValue,
          happyWork,
          professionalTalent,
          projectExperience,
          supplementaryData,
          skills,
        },
        {
          where: { userId },
        }
      );

      return res.status(200).json({
        message: "Registro actualizado exitosamente",
        updatedRecord,
      });
    } else {
      const newRecord = await generalInformation.create({
        salary,
        levelProfessional,
        name,
        profession,
        specialization,
        document,
        city,
        relocation,
        email,
        cellphone,
        linkedin,
        addedValue,
        happyWork,
        professionalTalent,
        projectExperience,
        supplementaryData,
        skills,
        userId,
      });

      return res.status(201).json({
        message: "Registro creado exitosamente",
        newRecord,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al procesar la solicitud" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const record = await generalInformation.findOne({ where: { userId } });

    if (record) {
      return res.status(200).json(record);
    } else {
      return res
        .status(404)
        .json({
          message: "No se encontró información general para este usuario",
        });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener la información general" });
  }
});

module.exports = router;
