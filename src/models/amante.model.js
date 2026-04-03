/**
 * Modelo de Amante usando Mongoose
 * Define la estructura de la colección en MongoDB
 * Incluye validaciones básicas a nivel de esquema
 */

const mongoose = require('mongoose');

const AmanteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    edad: {
      type: Number,
      required: [true, 'La edad es obligatoria'],
      min: [18, 'La edad debe ser mayor a 18'],
    },
    intereses: {
      type: [String],
      required: [true, 'Los intereses son obligatorios'],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: 'Debe haber al menos un interés',
      },
    },
  },
  {
    timestamps: true, // createdAt y updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model('Amante', AmanteSchema);