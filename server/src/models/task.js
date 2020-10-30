import mongoose from "mongoose"

const Task = new mongoose.Schema({
    description:{
        type:String,
        required:true,
        minlength:2
    },
    author:{ 
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['TODO','IN-PROGRESS','COMPLETED','TESTED','UNDER-REVIEW','MERGED','REDO'],
        default: "TODO"
    },
    lastModified:{
        type:String,
        required:true
    }

})

const TaskModel = mongoose.model("Task",Task)

export default TaskModel