const express = require("express");
const { User } = require("../models");
const router = express.Router();

// Crear un usuario
router.post("/", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
