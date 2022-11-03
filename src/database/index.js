const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const User = require('../models/User');
const ServiceOrder = require('../models/ServiceOrder');
const Service = require('../models/Service');

const connection = new Sequelize(dbConfig);

User.init(connection);
ServiceOrder.init(connection);
Service.init(connection);

module.exports = connection;