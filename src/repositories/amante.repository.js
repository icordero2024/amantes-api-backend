/**
 * Repository de Amante
 * Encargado únicamente del acceso a datos (MongoDB)
 * No contiene lógica de negocio
 */

const Amante = require('../models/amante.model');

class AmanteRepository {
  /**
   * Crea un nuevo amante en la base de datos
   * @param {Object} amanteData
   * @returns {Promise<Object>}
   */
  async create(amanteData) {
    return await Amante.create(amanteData);
  }

  /**
   * Busca amantes por interés
   * @param {string} interes
   * @returns {Promise<Array>}
   */
  async findByInteres(interes) {
    return await Amante.find({
      intereses: interes,
    });
  }
}

module.exports = new AmanteRepository();