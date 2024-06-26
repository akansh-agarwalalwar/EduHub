const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");
const router = express.Router();


const dotenv = require("dotenv");
dotenv.config();

const jwtkey = process.env.JWT;
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ message: "Data Saved", token: token });
} catch (err) {
    res.status(422).send(err.message);
  }
})


router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
    


})



module.exports = router;
