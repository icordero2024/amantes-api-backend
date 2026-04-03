/**
 * Rutas de Amante
 * Conectan endpoints con el controller
 */

const express = require('express');
const router = express.Router();

const AmanteController = require('../controllers/amante.controller');

/**
 * Crear un amante
 */
router.post('/', (req, res) => AmanteController.create(req, res));

/**
 * Obtener amantes por interés
 */
router.get('/', (req, res) => AmanteController.getByInteres(req, res));

module.exports = router;