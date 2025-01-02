// controllers/taskController.js
const Task = require('../models/Task');

// Obtener todas las tareas
const getTasks = async (req, res) => {
  try {
	const { completed } = req.query;
	const filter = completed !== undefined ? { completed: completed === 'true' } : {};
    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas', error });
  }
};

// Crear una nueva tarea
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear tarea', error });
  }
};

// Obtener una tarea por ID
const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tarea', error });
  }
};

// Actualizar una tarea
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { title, description, completed }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
	console.error('Error al actualizar tarea:', error);
    res.status(500).json({ message: 'Error al actualizar tarea', error });
  }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json({ message: 'Tarea eliminada con éxito' });
  } catch (error) {
	console.error('Error al eliminar tarea:', error);
	res.status(500).json({ message: 'Error al eliminar tarea', error });
  }
};

// Exportar los controladores
module.exports = {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
