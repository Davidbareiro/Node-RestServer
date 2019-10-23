
require ('./config/config')

const express = require('express')




const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const app = express()
 
const bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use( require ( './routes/usuario'));

//console.log(`mongoose version: ${mongoose.version}`);


  mongoose.connect(process.env.urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
  
  }, (err, res) =>{

    if (err) console.log (err);

    console.log ('Estamos online ');
  });

//   mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
     

//         if (err) throw err;

//         console.log ('Base de Datos Online');


//   });



app.listen(process.env.PORT, () => {
    console.log (`Escuchando el puerto : ${process.env.PORT}`)
})