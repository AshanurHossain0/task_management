const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        assignedUser:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        dueDate:{
            type:String,
        },
        isCompleted:{
            type:Boolean,
            default:false
        },
        isDeleted:{
            type:Boolean,
            default:false
        }
    }
)

module.exports=mongoose.model('Task',taskSchema);