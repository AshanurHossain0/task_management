const taskModel=require("../models/taskModel");

const create=async function (req,res){
    try{
        let taskData=req.body;
        if(!taskData.title || !taskData.description) return res.status(400).send({status:false,message:"task title and description is mandatory"}) 

        taskData.creator=req.token.userId;

        //new task data creation 
        await taskModel.create(taskData);

        return res.status(201).send({status:true,message:"Success"});
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}


const getTasks=async function (req,res){
    try{
        const tasks=await taskModel.find({});
        return res.status(200).send({status:true,message:"Success",data:tasks})
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}


const getSingleTask=async function (req,res){
    try{
        const task=await taskModel.findById(req.params.id);
        if(!task) return res.status(404).send({status:false,message:"task not found!"})
        return res.status(200).send({status:true,message:"Success",data:task})
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}






module.exports={create,getSingleTask,getTasks};