require('dotenv/config');
require('express-async-errors');

const { response } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

const routes = require('../src/routes');
app.use(routes);

const AppError = require('./utils/AppError');

app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'Erro',
            message: error.message
        });
    }

    console.error(error);

    return res.status(500).json({
        status: 'Erro',
        message: 'Erro interno do servidor.'
    });
})

app.get("/", function(req, res){
    res.send("Hello World")
  }); 

app.listen(process.env.PORT || 3333, ()=>{
    console.log("Aplicação rodando");
});


