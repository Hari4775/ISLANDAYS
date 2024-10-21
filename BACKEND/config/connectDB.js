const mongoose = require("mongoose");
const env = require("dotenv")
env.config()

 
const url = process.env.DBURL

const connectDB = async()=>{
    await mongoose.connect(url)
}

module.exports= connectDB;