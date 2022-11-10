const { Router } = require("express");
const sessionsRoutes = Router();

const sessionsController = require("../controllers/sessionsController.js");

sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;
