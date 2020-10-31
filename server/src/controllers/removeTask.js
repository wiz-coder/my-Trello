import User from "../models/user"
import Task from "../models/task"

export const deleteTask = async(req,res,next) => {
    try{
        const deletedTask = await Task.deleteOne({_id:req.body.taskID})
        const resUser = await (await User.findOne({email:req.email})).populate([
            {
                path:"projects",
                model: "Project",
                populate:{
                    path:"tasks",
                    model:"Task"
                }
            }
        ])
        res.json({success:true,message:"Task removed successfully",data:resUser})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}