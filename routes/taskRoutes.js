// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rutas para manejar tareas
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: "Obtener todas las tareas"
 *     description: "Obtiene la lista completa de tareas almacenadas en la base de datos."
 *     responses:
 *       200:
 *         description: "Listado de tareas"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: "ID único de la tarea"
 *                   title:
 *                     type: string
 *                     description: "Título de la tarea"
 *                   description:
 *                     type: string
 *                     description: "Descripción de la tarea"
 *                   completed:
 *                     type: boolean
 *                     description: "Estado de la tarea (completada o pendiente)"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: "Fecha de creación de la tarea"
 *       500:
 *         description: "Error al obtener las tareas"
 */
 router.get('/', taskController.getTasks);           // Obtener todas las tareas

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: "Crear una nueva tarea"
 *     description: "Permite crear una nueva tarea en la base de datos. El campo 'title' es obligatorio."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "Título de la tarea"
 *                 example: "Hacer compras"
 *               description:
 *                 type: string
 *                 description: "Descripción de la tarea"
 *                 example: "Comprar pan y leche"
 *               completed:
 *                 type: boolean
 *                 description: "Estado de la tarea, por defecto 'false' (pendiente)"
 *                 example: false
 *     responses:
 *       201:
 *         description: "Tarea creada exitosamente"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: "ID de la tarea recién creada"
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: "Solicitud incorrecta"
 *       500:
 *         description: "Error al crear la tarea"
 */
router.post('/', taskController.createTask);        // Crear una nueva tarea

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: "Obtener una tarea por ID"
 *     description: "Obtiene los detalles de una tarea específica a partir de su ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la tarea que se desea obtener"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Detalles de la tarea"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: "Tarea no encontrada"
 *       500:
 *         description: "Error al obtener la tarea"
 */

router.get('/:id', taskController.getTaskById);     // Obtener una tarea por ID

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: "Actualizar una tarea"
 *     description: "Permite actualizar los campos de una tarea existente."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la tarea a actualizar"
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: "Título de la tarea"
 *               description:
 *                 type: string
 *                 description: "Descripción de la tarea"
 *               completed:
 *                 type: boolean
 *                 description: "Estado de la tarea (true o false)"
 *     responses:
 *       200:
 *         description: "Tarea actualizada exitosamente"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: "Solicitud incorrecta"
 *       404:
 *         description: "Tarea no encontrada"
 *       500:
 *         description: "Error al actualizar la tarea"
 */
router.put('/:id', taskController.updateTask);      // Actualizar una tarea

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: "Eliminar una tarea"
 *     description: "Permite eliminar una tarea de la base de datos utilizando su ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID de la tarea que se desea eliminar"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Tarea eliminada exitosamente"
 *       404:
 *         description: "Tarea no encontrada"
 *       500:
 *         description: "Error al eliminar la tarea"
 */

router.delete('/:id', taskController.deleteTask);   // Eliminar una tarea

module.exports = router;


