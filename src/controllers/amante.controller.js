/**
 * Controller de Amante
 * Maneja request/response
 * No contiene lógica de negocio
 */

const AmanteService = require('../services/amante.service');

class AmanteController {
  /**
   * POST /amantes
   */
  async create(req, res) {
    try {
      const data = req.body;

      const nuevoAmante = await AmanteService.createAmante(data);

      return res.status(201).json({
        message: 'Amante creado exitosamente',
        data: nuevoAmante,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  /**
   * GET /amantes?interes=x
   */
  async getByInteres(req, res) {
    try {
      const { interes } = req.query;

      const resultados = await AmanteService.getAmantesByInteres(interes);

      return res.status(200).json({
        data: resultados,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

module.exports = new AmanteController();