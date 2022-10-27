require('dotenv/config');
const express = require('express');
const { route } = require('../src/routes');


const app = express();
app.use(express.json());

const routes = require('../src/routes');
app.use(routes);

// app.get("/", function(req, res){
//     res.send("Hello World")
//   }); 

app.listen(process.env.PORT || 3333, ()=>{
    console.log("Aplicação rodando");
});


