const express = require("express")
const cookieparser= require("cookie-parser");

const app= express()
const connectDB = require("../config/connectDB");
const authRoutes= require("../routers/AuthRouter")
const env = require("dotenv");
const port = process.env.PORT;
env.config();

app.use(express.json())
app.use(cookieparser())
app.use("/",authRoutes);

connectDB()
.then(()=>{
    console.log("data base connection established")
    app.listen(port,()=>{
        console.log("server is connected")
    })

})
console.log(port)