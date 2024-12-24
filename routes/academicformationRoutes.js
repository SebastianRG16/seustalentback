const express = require("express");
const { academicformation } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { formation, userId } = req.body;

    const existingRecord = await academicformation.findOne({
      where: { userId },
    });

    if (existingRecord) {
      const updatedRecord = await existingRecord.update({
        formation,
      });
      return res.status(200).json(updatedRecord);
    } else {
      const newRecord = await academicformation.create({
        formation,
        userId,
      });
      return res.status(201).json(newRecord);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al crear o actualizar la formación académica" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const record = await academicformation.findOne({ where: { userId } });

    if (record) {
      return res.status(200).json(record);
    } else {
      return res
        .status(404)
        .json({
          message: "No se encontró información académica para este usuario",
        });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener la información académica" });
  }
});

module.exports = router;
