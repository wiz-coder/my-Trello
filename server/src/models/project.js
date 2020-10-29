import mongoose from "mongoose"

const Project = new mongoose.Schema({
 
    title:{
        type:String,
        required:true,
    },
    tasks:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Task"
    }],
    owner:{
        type:String
    },
    editors:[String],
    viewers:[String],
    stages:{
        type:[String],
        default:['TODO','IN-PROGRESS','COMPLETED','TESTED','UNDER-REVIEW','MERGED','REDO']
    }
})

const ProjectModel = mongoose.model("Project",Project)

export default ProjectModel