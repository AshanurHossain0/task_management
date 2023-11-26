const userRoutes=require("./routes/userRoutes")
const taskRoutes=require("./routes/taskRoutes");


const mongoose=require("mongoose");
const express=require("express");
const app=express();

app.use(express.json());

mongoose.connect("mongodb+srv://ashanur:nurasha2000@ashanurdb.x6brlcb.mongodb.net/task_manage")
.then(_=>console.log("Database Connection Successful"))
.catch(err=>console.log(err));


app.use("/user",userRoutes);
app.use("/task",taskRoutes);
app.use("/*",(req,res)=>res.status(404).send({status:false,message:"Invalid Path"}));

app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("Server is connected...");
})

