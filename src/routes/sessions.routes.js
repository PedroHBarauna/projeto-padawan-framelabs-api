const {Router} = require('express');
const sessionsRoutes = Router();

const sessionsController = require('../Controllers/sessionsController.js');

sessionsRoutes.post('/', sessionsController.create);

module.exports = sessionsRoutes;