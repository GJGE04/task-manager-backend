const request = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const Task = require('../models/Task');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/task-manager-test');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Task API', () => {

  // Prueba para crear tarea
  it('debería crear nueva task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Nueva tarea',
        description: 'Descripción de la tarea',
        completed: false,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Nueva tarea');
	expect(res.body.completed).toBe(false);
  });

  // Prueba para obtener todas las tareas
  it('debería listar todas las tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Prueba para obtener tarea por ID
  it('debería obtener task x id', async () => {
    const task = new Task({
      title: 'Tarea de prueba',
      description: 'Descripción de prueba',
    });
    await task.save();

    const res = await request(app).get(`/api/tasks/${task._id}`);
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(task._id.toString());
	expect(res.body.title).toBe(task.title);
  });

  // Prueba para actualizar tarea
  it('deberia actualizar una task', async () => {
    const task = new Task({ title: 'Tarea de prueba', description: 'Descripción de prueba' });
    await task.save();

    const res = await request(app)
      .put(`/api/tasks/${task._id}`)
      .send({ title: 'Tarea actualizada', description: 'Descripción actualizada', completed: true });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Tarea actualizada');
    expect(res.body.completed).toBe(true);
  });
  
  // Prueba para eliminar tarea
  it('deberia borrar una task', async () => {
    const task = new Task({ title: 'Tarea para eliminar', description: 'Descripción' });
    await task.save();  // Guardar la tarea en la base de datos

    const res = await request(app).delete(`/api/tasks/${task._id}`);
    
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Tarea eliminada con éxito');
  });

  // Prueba para error (tarea no encontrada)
  it('deberia retornar 404 si no encuentra task', async () => {
    const res = await request(app).get('/api/tasks/62e8c2f8f7a1b2b0d3c7b78d');  // ID no existente

    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Tarea no encontrada');
  });
  
});