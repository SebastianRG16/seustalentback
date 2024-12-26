const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const userRoute = require("./routes/userRoutes");
const tipeworkinRoutes = require("./routes/tipeworkinRoutes");
const generalinformation = require("./routes/generalinformationRoutes");
const academicformation = require("./routes/academicformationRoutes");
const workexperience = require("./routes/workexperienceRoutes");

const app = express();

app.use(
  cors({
    origin: "https://seustalentfront.onrender.com/",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/users", userRoute);
app.use("/tipeworkin", tipeworkinRoutes);
app.use("/generalinformation", generalinformation);
app.use("/academicformation", academicformation);
app.use("/workexperience", workexperience);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Conexión con la base de datos establecida");
  } catch (error) {
    console.error("Error conectando con la base de datos:", error);
  }
});
