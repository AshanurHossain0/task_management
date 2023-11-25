require("dotenv").config();
const mongoose=require("mongoose");
const express=require("express");
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(_=>console.log("Database Connection Successful"))
.catch(err=>console.log(err));

app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Server is connected...");
})

