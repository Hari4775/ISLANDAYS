const mongoose = require("mongoose");
const validate =require('validator');
const userSchema = new mongoose.Schema({
    fristName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        validator(value){
            if(!validate.isEmail(value)){
                throw new Error("invalid mail id entered")
            }
        }

    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        validator(value){
            if(!validate.isMobilePhone(value,'en-IN'))
                throw new Error("Invalid  Phone number")
        }
    },
    photoURL:{
        type:String
    },
    guardianFristName:{
        type:String,
        required:true
    },
    guardianLastName:{
        type:String,
    },
    guardianPhoneNumber:{
        type:String,
        required:true,
        trim:true,
        validator(value){
            if(!validate.isMobilePhone(value,'en-IN'))
                throw new Error("Invalid  Phone number")
        }
    },

    age:{
        type:String
    },
    gender:{
        type:String,
        enum:{
           values:["male","female","others"],
           message:`{VALUE} is not a valid gender type`

        }
    },
    photoUrl:{
      type:String

    },
    address:{
        type:String
    },
    adaarNumber:{
        type:String
    },
    adaarPhotoURL:{
        type:String9
    },
    PCCphotoURL:{
        type:String
    }

})


module.exports= mongoose.model("users",userSchema)