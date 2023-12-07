const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { dbConnection } = require("./database/config");

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
dbConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Restaurante API",
    desarrollador: "Javier Meneses",
    version: "1.0.0",
  });
});

// Rutas
app.use("/dishes", require("./routes/dishes"));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
