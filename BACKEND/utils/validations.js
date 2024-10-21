const validator= require("validator");

const validateSignupDate = (req)=>{
    console.log(req.body,"req bodu")
    const {fristName,
        lastName,
        phone,
        age,
        gender,
        email,
        password, 
        aadarNumber,
        aadarPhotoURL,
         pccPhotoURL,
         photoURL,
        guardiaFristName,
         gurardianLastName, 
         guradianphone}= req.body;

    if(!fristName){
        throw new Error("name is not valid")
    }
   if(!validator.isMobilePhone(phone,'en-IN')){
    throw new Error("invalid phone number entered")
    }

    if(!age){
        throw new Error("age is required")
    }
    if(!validator.isEmail(email)){
        throw new Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)){
        throw  new Error("Please enter a strong Password")
    }

    if(!validator.isMobilePhone(guradianphone,'en-IN')){
        throw new Error("invalid phone number entered")
        }
    
}

module.exports = validateSignupDate;