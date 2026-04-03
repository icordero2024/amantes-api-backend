/**
 * Archivo que centraliza todas las rutas del sistema
 * Permite escalar fácilmente agregando nuevos módulos
 */

const express = require('express');
const router = express.Router();

// Importación de rutas específicas
const amanteRoutes = require('./amante.routes');

// Registro de rutas
router.use('/amantes', amanteRoutes);

module.exports = router;