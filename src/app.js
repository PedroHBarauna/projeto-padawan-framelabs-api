require('dotenv/config');
const express = require('express');


const app = express();
app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello World")
  }); 

app.listen(process.env.PORT || 3333, ()=>{
    console.log("Aplicação rodando");
});


