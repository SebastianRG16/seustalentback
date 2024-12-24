const express = require("express");
const { tipeWorking } = require("../models"); // Asegúrate de importar el modelo tipeWorking
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { formation, workShops, cultures, userId } = req.body;

    const existingTipeWorking = await tipeWorking.findOne({
      where: { userId },
    });

    if (existingTipeWorking) {
      const updatedTipeWorking = await tipeWorking.update(
        { formation, workShops, cultures },
        { where: { userId } }
      );

      return res.status(200).json({
        message: "Registro actualizado exitosamente",
        updatedTipeWorking,
      });
    } else {
      const newTipeWorking = await tipeWorking.create({
        formation,
        workShops,
        cultures,
        userId,
      });

      return res.status(201).json({
        message: "Registro creado exitosamente",
        newTipeWorking,
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

    const tipeWorkings = await tipeWorking.findAll({
      where: {
        userId: userId,
      },
    });

    if (tipeWorkings.length === 0) {
      return res.status(404).json({
        message: "No se encontraron tipos de trabajo para este usuario",
      });
    }

    return res.status(200).json(tipeWorkings);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al obtener los tipos de trabajo" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { formation, workShops, cultures, userId } = req.body;

    const tipeWorkingToUpdate = await tipeWorking.findByPk(id);

    if (!tipeWorkingToUpdate) {
      return res.status(404).json({ message: "Tipo de trabajo no encontrado" });
    }

    tipeWorkingToUpdate.formation = formation || tipeWorkingToUpdate.formation;
    tipeWorkingToUpdate.workShops = workShops || tipeWorkingToUpdate.workShops;
    tipeWorkingToUpdate.cultures = cultures || tipeWorkingToUpdate.cultures;
    tipeWorkingToUpdate.userId = userId || tipeWorkingToUpdate.userId;

    await tipeWorkingToUpdate.save();

    return res.status(200).json(tipeWorkingToUpdate);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al actualizar el tipo de trabajo" });
  }
});

module.exports = router;
