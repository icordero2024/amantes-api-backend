/**
 * Configuración de la conexión a MongoDB
 * Utiliza Mongoose
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error('La variable MONGO_URI no está definida');
    }

    await mongoose.connect(uri);

    console.log('Conectado a MongoDB correctamente');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error.message);
    process.exit(1); // Detiene la app si falla la conexión
  }
};

module.exports = connectDB;