const express = require('express');
const fs = require('fs')
const app = express()

app.use(express.urlencoded())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Project.html')
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/contact.html')
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html')
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/Project.html')
});

app.post('/contact', function (req, res) {
  name = req.body.name
  food = req.body.food
  kg = req.body.kg

  let outputToWrite = `The name of ${name},The food name${food},The food kg${kg}`
  fs.writeFileSync('output.txt', outputToWrite)
  const params = {'message':'The form has been sumitted'}
  res.sendFile(__dirname + '/contact.html',params)
});


app.listen(3000)