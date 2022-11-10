const { Router } = require('express');

const sessionsRoutes = Router();

const sessionsController = require('../controllers/sessionsController');

sessionsRoutes.post('/', sessionsController.create);

module.exports = sessionsRoutes;
