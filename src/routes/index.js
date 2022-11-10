const { Router } = require('express');

const routes = Router();

const usersRoutes = require('./users.routes');
const sessionsRoutes = require('./sessions.routes');
const workOrdersRoutes = require('./workOrders.routes');
const servicesRoutes = require('./services.routes');

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/work-orders', workOrdersRoutes);
routes.use('/services', servicesRoutes);

module.exports = routes;
