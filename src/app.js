/**
 * Archivo principal de la aplicación
 * Se encarga de:
 * - Configurar Express
 * - Aplicar middlewares globales
 * - Cargar variables de entorno
 * - Registrar rutas
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// ==========================
// Middlewares globales
// ==========================
app.use(express.json()); // Permite recibir JSON en requests
app.use(cors()); // Habilita CORS

// ==========================
// Rutas principales
// ==========================
app.use('/api', routes);

// ==========================
// Configuración del puerto
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;