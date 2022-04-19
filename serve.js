const express = require("express");
const path =  require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/carteira-cripto'));
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/dist/carteira-cripto/index.html');
});

app.listen(port,()=>{
  console.log("Serve rodando na porta"+port);
});
