const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster-tcacl.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
//tipos de parâmetros 

//Query(filtros, pagination) - site/?nome=diogo acesso  req.query
//Route(PUT/DELETE)  -  site/user/2 req.params
//Body  - req.body

app.use(express.json());
app.use(routes);

app.listen(3000);


