/**
 * DTO para Amante
 * Se encarga de validar y estructurar los datos de entrada
 * No depende de ninguna librería externa
 */

class AmanteDTO {
  constructor({ nombre, edad, intereses }) {
    this.nombre = nombre;
    this.edad = edad;
    this.intereses = intereses;

    this.validate();
  }

  validate() {
    // Validación de nombre
    if (!this.nombre || typeof this.nombre !== 'string' || this.nombre.trim() === '') {
      throw new Error('El nombre es obligatorio y debe ser un string no vacío');
    }

    // Validación de edad
    if (typeof this.edad !== 'number' || this.edad <= 18) {
      throw new Error('La edad debe ser un número mayor a 18');
    }

    // Validación de intereses
    if (!Array.isArray(this.intereses) || this.intereses.length === 0) {
      throw new Error('Los intereses deben ser un arreglo no vacío');
    }

    for (const interes of this.intereses) {
      if (typeof interes !== 'string' || interes.trim() === '') {
        throw new Error('Todos los intereses deben ser strings válidos');
      }
    }
  }

  toObject() {
    return {
      nombre: this.nombre.trim(),
      edad: this.edad,
      intereses: this.intereses.map((i) => i.trim()),
    };
  }
}

module.exports = AmanteDTO;