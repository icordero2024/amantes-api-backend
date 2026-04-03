/**
 * Service de Amante
 * Contiene la lógica de negocio
 * No depende de Express
 */

const AmanteRepository = require('../repositories/amante.repository');
const AmanteDTO = require('../dtos/amante.dto');

class AmanteService {
  /**
   * Crear un nuevo amante
   * @param {Object} data
   */
  async createAmante(data) {
    // Validación mediante DTO
    const amanteDTO = new AmanteDTO(data);

    // Transformación de datos
    const amanteData = amanteDTO.toObject();

    // Persistencia
    const nuevoAmante = await AmanteRepository.create(amanteData);

    return nuevoAmante;
  }

  /**
   * Obtener amantes por interés
   * @param {string} interes
   */
  async getAmantesByInteres(interes) {
    // Validación básica de negocio
    if (!interes || typeof interes !== 'string' || interes.trim() === '') {
      throw new Error('El interés es obligatorio para la búsqueda');
    }

    const resultados = await AmanteRepository.findByInteres(interes.trim());

    return resultados;
  }
}

module.exports = new AmanteService();