
require ('./config/config')

const express = require('express')
const app = express()
 
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/usuario', function (req, res) {
  res.json('Get usuario')
})

app.post('/usuario', function (req, res) {
    res.json('post usuario')
  })


app.put('/usuario', function (req, res) {
    res.json('put usuario')
  })


app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
  })



app.listen(process.env.PORT, () => {
    console.log (`Escuchando el puerto : ${process.env.PORT}`)
})