const {Router} = require('express');
const workOrdersRoutes = Router();

const workOrdersController = require('../Controllers/workOrdersController.js');

const autenticar = require('../middlewares/autenticar');

workOrdersRoutes.use(autenticar);

workOrdersRoutes.post('/', workOrdersController.create);
workOrdersRoutes.get('/', workOrdersController.index);
workOrdersRoutes.get('/:id', workOrdersController.show);
workOrdersRoutes.put('/:id', workOrdersController.update);
workOrdersRoutes.delete('/:id', workOrdersController.delete);

module.exports = workOrdersRoutes;