const taskModel=require("../models/taskModel");

const create=async function (req,res){
    try{
        let taskData=req.body;
        if(!taskData.title || !taskData.description) return res.status(400).send({status:false,message:"task title and description is mandatory"}) 

        taskData.creator=req.user;

        //new task data creation 
        const newTask=taskModel.create(taskData);

        return res.status(201).send({status:true,message:"Success",data:newTask});
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}