const Sequelize = require("sequelize");
const dbConfig = require("../../config/database");
const Sequelize = require("sequelize");
const dbConfig = require("../../config/database");

const User = require("../models/User");
const WorkOrder = require("../models/WorkOrder");
const Service = require("../models/Service");

const connection = new Sequelize(dbConfig);

User.init(connection);
WorkOrder.init(connection);
Service.init(connection);

WorkOrder.associate(connection.models);
// Service.associate(connection.models);
// User.associate(connection.models);

module.exports = connection;

