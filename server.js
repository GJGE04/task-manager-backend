// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware'); // Importa el middlewar

// Configuración de variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Permite que el servidor reciba JSON

// Rutas para tareas
app.use('/api/tasks', taskRoutes);

// Middleware para manejo de errores
app.use(errorHandler); 

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar con MongoDB:', err);
  });
