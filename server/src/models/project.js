import mongoose from "mongoose"

const Project = new mongoose.Schema({
 
    title:{
        type:String,
        required:true,
        unique: true
    },
    tasks:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Task"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    editors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    viewers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }]
})

const ProjectModel = mongoose.model("Project",Project)

export default ProjectModel