const mongoose =require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.DBURL;
console.log(url,"url")

const connectDB = async()=>{
    await mongoose.connect(url)
}

module.exports =connectDB;