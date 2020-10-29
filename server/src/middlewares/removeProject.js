import Project from "../models/project"
import User from "../models/user"

export const isProjectExists = async (req,res,next) =>{
    try{
        const specificProject = await Project.findById(req.body.ID)
        if(!specificProject) return res.json({success:false,error:"Project doesn't exist"})
        next()  
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const removeProjectFromUsers = async (req,res,next) => {
    try{
        const updateUsersInProject = await User.updateMany({projects:req.body.ID},{
            $pull:{
                projects:req.body.ID
            }
        })
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}