const {Router} = require('express');
const routes = Router();

const usersRoutes = require('./users.routes.js');
const sessionsRoutes = require('./sessions.routes.js');
const workOrdersRoutes = require('./workOrders.routes.js');

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/work-orders', workOrdersRoutes);

module.exports = routes;