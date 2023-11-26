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
        const tasks=await taskModel.find({isDeleted:false});
        return res.status(200).send({status:true,message:"Success",data:tasks})
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}


const getSingleTask=async function (req,res){
    try{
        const task=await taskModel.findOne({_id:req.params.id,isDeleted:false});
        if(!task) return res.status(404).send({status:false,message:"task not found!"})
        return res.status(200).send({status:true,message:"Success",data:task})
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}

const updateTask=async function(req,res){
    try{
        const id=req.params.id;
        const data=req.body;

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "provide data to be updated!" });
        }

        let {title,description,dueDate,usersToBeAssigned,isCompleted}=data;

        const updationData={};
        if(title) updationData.title=title.trim();
        if(description) updationData.description=description.trim();
        if(dueDate) updationData.dueDate=dueDate;
        if(isCompleted !==undefined) updationData.isCompleted=isCompleted;
        if(!usersToBeAssigned || usersToBeAssigned.length===0) usersToBeAssigned=[];

        const updatedData=await taskModel.findOneAndUpdate({_id:id,isDeleted:false},{$set:updationData,$push:{assignedUsers: {$each: usersToBeAssigned}}},{new:true})

        if(!updatedData) return res.status(404).send({status:false,message:"no task is found to be updated!"})

        return res.status(200).send({status:true,message:"Success",data:updatedData});

    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}


const deleteTask=async function (req,res){
    try{
        const deletedTask=await taskModel.findOneAndUpdate({_id:req.params.id,isDeleted:false},{isDeleted:true});
        if(!deletedTask) return res.status(404).send({status:false,message:"no task is found to be deleted!"})
        return res.status(200).send({status:true,message:"Success"})
    }
    catch(err){
        return res.status(500).send({status:false,message: err.message})
    }
}



module.exports={create,getSingleTask,getTasks,updateTask,deleteTask};