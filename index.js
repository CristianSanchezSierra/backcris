const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pokeRouter = require('./routes/pokelist');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))



app.use('/', pokeRouter);


app.listen(4000, ()=>{
    console.log("Server on")
})
