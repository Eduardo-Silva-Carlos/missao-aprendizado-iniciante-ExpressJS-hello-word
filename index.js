const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

app.get('/oi', function(req, res) {
    res.send('Óla mundo!')
})

app.get('/2', function(){
    console.log('Aplicação rodando em http://localhost:3000')
})