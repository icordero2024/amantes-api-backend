/**
 * Seed de datos iniciales
 * Inserta registros automáticamente si la colección está vacía
 */

const Amante = require('../models/amante.model');

const seedAmantes = async () => {
  try {
    // Verificar si ya existen datos
    const count = await Amante.countDocuments();

    if (count > 0) {
      console.log('Seed: datos ya existen, no se insertan duplicados');
      return;
    }

    // Datos iniciales
    const amantes = [
      {
        nombre: 'Ana',
        edad: 25,
        intereses: ['cine', 'viajar'],
      },
      {
        nombre: 'Carlos',
        edad: 30,
        intereses: ['leer', 'tecnologia'],
      },
      {
        nombre: 'María',
        edad: 28,
        intereses: ['musica', 'arte'],
      },
      {
        nombre: 'Luis',
        edad: 35,
        intereses: ['deporte', 'viajar'],
      },
      {
        nombre: 'Sofía',
        edad: 22,
        intereses: ['cine', 'leer'],
      },
    ];

    await Amante.insertMany(amantes);

    console.log('Seed: datos insertados correctamente');
  } catch (error) {
    console.error('Error en seed:', error.message);
  }
};

module.exports = seedAmantes;