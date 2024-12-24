const express = require("express");
const { workexperience } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { works, informationWork, userId } = req.body;

    const existingRecord = await workexperience.findOne({ where: { userId } });

    if (existingRecord) {
      const updatedRecord = await existingRecord.update({
        works,
        informationWork,
      });
      return res.status(200).json(updatedRecord);
    } else {
      const newRecord = await workexperience.create({
        works,
        informationWork,
        userId,
      });
      return res.status(201).json(newRecord);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al crear o actualizar la experiencia laboral" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const record = await workexperience.findOne({ where: { userId } });

    if (record) {
      return res.status(200).json(record);
    } else {
      return res
        .status(404)
        .json({
          message: "No se encontró experiencia laboral para este usuario",
        });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener la experiencia laboral" });
  }
});

module.exports = router;
