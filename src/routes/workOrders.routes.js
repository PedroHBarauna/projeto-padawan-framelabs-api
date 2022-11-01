const {Router} = require('express');
const workOrdersRoutes = Router();

const workOrdersController = require('../Controllers/workOrdersController.js');

const autenticar = require('../middlewares/autenticar');

workOrdersRoutes.use(autenticar);

workOrdersRoutes.post('/', workOrdersController.create);
workOrdersRoutes.get('/', workOrdersController.index);

module.exports = workOrdersRoutes;