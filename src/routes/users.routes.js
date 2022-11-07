const { Router } = require("express");
const userRoutes = Router();

const userController = require("../controllers/userController.js");

userRoutes.get("/", userController.index);
userRoutes.get("/:id", userController.show);
userRoutes.post("/", userController.create);

module.exports = userRoutes;
