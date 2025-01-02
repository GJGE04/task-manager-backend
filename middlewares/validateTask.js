const { body, validationResult } = require('express-validator');

// Middleware para validar los datos de la tarea
const validateTask = [
  body('title').notEmpty().withMessage('El título es obligatorio'),
  body('description').optional().isString().withMessage('La descripción debe ser una cadena de texto'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateTask };
