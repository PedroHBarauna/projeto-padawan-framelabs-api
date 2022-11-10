const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.js'];

console.log(outputFile);
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./src/app.js');
});
