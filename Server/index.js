const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const {mongoURL} = require('./keys')
require('./user/user')

mongoose.connect(mongoURL)


mongoose.connection.on("connected",()=>{
  console.log("Mongoose connected") 
})
mongoose.connection.on("eroor",(err)=>{
  console.log("Mongoose connection error",err)
})

app.use(bodyParser.json())
app.post('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
