/**
 * Archivo principal de la aplicación
 * Ahora incluye conexión a MongoDB
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const connectDB = require('./config/database');

const app = express();

// ==========================
// Conexión a la base de datos
// ==========================
connectDB();

// ==========================
// Middlewares
// ==========================
app.use(express.json());
app.use(cors());

// ==========================
// Rutas
// ==========================
app.use('/api', routes);

// ==========================
// Puerto
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;