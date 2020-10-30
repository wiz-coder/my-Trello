import Task from "../models/task"
import User from "../models/user"

export const modifyTaskStatus = async (req,res,next) => {
    try{
        const updatedTask = await Task.updateOne({_id:req.body.taskID},{
            $set:{
                status:req.body.status
            }
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
        res.json({success:true,message:"Task status has been changed successfully",data:resUser})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}