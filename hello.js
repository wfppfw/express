const express = require('express');
const app = express();
const port = 3000;

// app.METHOD(PATH, HANDLER) 基本路由
app.get('/',(req,res)=>{
    res.send('hello,world')
})
app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
  app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })
app.listen(port,()=>{
    console.log('Example app listening on')
})