const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Leer la URI desde el archivo .env
const DB_URI = process.env.DB_URI;

// Conectar a MongoDB Atlas
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas:', err);
    process.exit(1); // Salir del proceso si falla la conexión
  });

module.exports = mongoose; // Exportar mongoose para usarlo en otros archivos
