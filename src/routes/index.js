const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./users.routes.js");
const sessionsRoutes = require("./sessions.routes.js");
const workOrdersRoutes = require("./workOrders.routes.js");
const servicesRoutes = require("./services.routes.js");

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/work-orders", workOrdersRoutes);
routes.use("/services", servicesRoutes);

module.exports = routes;
