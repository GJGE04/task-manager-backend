// models/Task.js
const mongoose = require('mongoose');

// Definir el esquema de la tarea
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
  },
  description: {
    type: String,
	required: false,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo de Tarea
module.exports = mongoose.model('Task', taskSchema);
