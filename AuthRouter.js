const express = require("express");
const User= require("../model/user")
const bcrypt =require("bcrypt");
const authRouter = express.Router();
const validation = require("../utils/validations");

authRouter.post("/signup",async(req,res)=>{
    try{
    //     validation(req) 
    //    const{fristName,lastName,email,age,gender,password}=req.body;
    //    const hashedPassword = await bcrypt.hash(password,10);
    //    const user = new User ({fristName,lastName,age,gender,email,password:hashedPassword});
    //    await user.save()
    //    res.send("user signup successfully")
    send.send("asldkfjhasdfgh")

    }catch(err){
      res.status(400).send("error signup data "+err.message)
    }
})

module.exports = {authRouter};