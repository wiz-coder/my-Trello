import moment from "moment"
import User from "../models/user"
import Project from "../models/project"
import Task from "../models/task"
import { path } from "dotenv/lib/env-options"

export const createTask = async (req,res,next) => {
    try{
        const creationTime = moment().format('llll')
        const modifiedTime = moment().format('llll')
        const newTask = new Task({
            description: req.body.description,
            author:req.email,
            createdAt: creationTime,
            lastModified: modifiedTime,
            status: 'TODO'
        })
        const savedTask = await newTask.save()
        const updatedProject = await Project.updateOne({_id:req.body.ID},{
            $push: {tasks: savedTask._id}
        })
        const resUser = await User.findOne({email:req.email}).populate([
            {
                path: "projects",
                model: "Project",
                populate: {
                    path: "tasks",
                    model:"Task"
                }
            }
        ])
        res.json({success:true,message:"new Task has been created and added successfully",data:resUser})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

