const express = require("express");
const User= require("../model/user")
const bcrypt =require("bcrypt");
const authRouter = express.Router();
const validation = require("../utils/validations");

authRouter.post("/signup",async(req,res)=>{
    try{
        validation(req) 
       const{fristName,
         lastName,
         email,
         phone,
         age,
         gender,
         password,
         aadarNumber,
         aadarPhotoURL,
         pccPhotoURL,
         photoURL,
         guardiaFristName,
          gurardianLastName,
          guradianphone,
         }=req.body;
      
      const existingUser= await User.findOne({
         $or:[{email}, {phone}]
      });

      if(existingUser){
      if (existingUser.email === email){
         throw new Error("Email already registerd  please try with another email id")
      }
      else if(existingUser.phone === phone){
         throw new Error("phone nnumber already  registerd please try with another phone number")
      }
      }
       console.log(req.body)
       const hashedPassword = await bcrypt.hash(password,10);
       const user = new User ({
         fristName,
         lastName,
         age,
         gender,
         phone, 
         email,
         password:hashedPassword, 
         aadarNumber,
         aadarPhotoURL,
         pccPhotoURL,
         photoURL,
         guardiaFristName,
          gurardianLastName,
          guradianphone,
         });

       await user.save()
    console.log(req.body,"req bodyy")
       res.send("user signup successfully")
        

    }catch(err){
      res.status(400).send("error signup data "+err.message)
      console.log("errorsss")
    }
})

module.exports = authRouter;