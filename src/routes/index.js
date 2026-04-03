/**
 * Centralización de rutas
 */

const express = require('express');
const router = express.Router();

const amanteRoutes = require('./amante.routes');

router.use('/amantes', amanteRoutes);

module.exports = router;