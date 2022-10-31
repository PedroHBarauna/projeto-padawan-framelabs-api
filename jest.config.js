const config = require('./jest.config');
config.testMatch = ["<rootDir>/src/**/*.spec.js"];
config.bail = true;
coverageProvider = "v8";
module.exports = config
