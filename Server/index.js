const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT_NO

// const mongoURL = process.env.MONGO_URL
require('./user/user')
const authRoutes = require('./auth/authRoutes')
mongoose.connect(process.env.MONGO_URL)
app.use(bodyParser.json()) 
app.use(authRoutes)
mongoose.connection.on("connected",()=>{ 
  console.log("Mongoose connected") 
})
mongoose.connection.on("eroor",(err)=>{
  console.log("Mongoose connection error",err)
})
// app.post('/', (req, res) => {
//     console.log(req.body)
//   res.send('Hello World!');
// });


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
