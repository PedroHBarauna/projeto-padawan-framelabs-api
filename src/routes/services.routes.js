const { Router } = require('express');

const servicesRoutes = Router();

const servicesController = require('../controllers/servicesController');

const autenticar = require('../middlewares/autenticar');

servicesRoutes.use(autenticar);

servicesRoutes.post('/', servicesController.create);
servicesRoutes.get('/', servicesController.index);
servicesRoutes.get('/:id', servicesController.show);
servicesRoutes.put('/:id', servicesController.update);
servicesRoutes.delete('/:id', servicesController.delete);

module.exports = servicesRoutes;
