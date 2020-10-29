import User from "../models/user"
import Project from "../models/project"

export const createProject = async (req,res,next) => {
    try{
        const editors = [req.email]
        const viewers = [req.email]
        const newProject = new Project({
            title:req.body.title,
            owner:req.email,
            editors:editors,
            viewers:viewers,
            stages: ['TODO','IN-PROGRESS','COMPLETED','TESTED','UNDER-REVIEW','MERGED','REDO']
        })
        const savedProject = await newProject.save()
        const updatedUser = await User.updateOne({email:req.email},{
           $push:{
               projects:savedProject._id
           }
        })
        const resUser = await (await User.findOne({email:updatedUser.email}).populate('projects')).execPopulate()
        res.json({success:false,message:"Project created successfully",data:resUser})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const addEditorOrViewer = async (req,res,next) => {
   try{
       switch(req.body.role){
           case "editor":
               const updatedProject = await Project.updateOne({_id:req.body.projectID},{
                   $push:{
                       editors:req.body.email,
                       viewers:req.body.email
                   }
               })
               const updatedEditor = await User.updateOne({email:req.body.email},{
                   $push:{
                       projects:updatedProject._id
                   }
               })
               const updatedUser = await User.findOne({email:req.email}).populate('projects').execPopulate()
               return req.json({success:true,message:'Added '+req.body.email+' as editor',data:updatedUser})
            case "viewer":
               const updatedProject = await Project.updateOne({_id:req.body.projectID},{
                   $push:{
                       viewers:req.body.email
                   }
               })
               const updatedViewer = await User.updateOne({email:req.body.email},{
                $push:{
                    projects:updatedProject._id
                }
            })
               const updatedUser = await (await User.findOne({email:req.email}).populate('projects')).execPopulate()
               return res.json({success:true,message:'Added '+req.body.email+' as viewer',data:updatedUser})
       }
   }catch(err){
    res.json({success:false,error:err.message})
}
}

export const removeEditorOrViewer = async (req,res,next) => {
    try{
        switch(req.body.role){
            case "editor":
                const updatedProject = await Project.updateOne({_id:req.body.projectID},{
                    $pull:{
                        editors:req.body.email,
                        viewers:req.body.email
                    }
                })
                const updatedEditor = await User.updateOne({email:req.body.email},{
                    $pull:{
                        projects:updatedProject._id
                    }
                })
                const updatedUser = await User.findOne({email:req.email}).populate('projects').execPopulate()
                return req.json({success:true,message:'Added '+req.body.email+' as editor',data:updatedUser})
             case "viewer":
                const updatedProject = await Project.updateOne({_id:req.body.projectID},{
                    $pull:{
                        viewers:req.body.email
                    }
                })
                const updatedViewer = await User.updateOne({email:req.body.email},{
                    $pull:{
                        projects:updatedProject._id
                    }
                })
                const updatedUser = await (await User.findOne({email:req.email}).populate('projects')).execPopulate()
                return res.json({success:true,message:'Added '+req.body.email+' as viewer',data:updatedUser})
        }
    }catch(err){
     res.json({success:false,error:err.message})
 }
 }
 
 export const removeProject = async (req,res,next) => {
     try{
         const deletedProject = await Project.deleteOne({_id:req.body.ID})
         const resUser = await (await User.findOne({email:req.email}).populate('projects')).execPopulate()
         res.json({success:true,message:"Project succeffully deleted",data:resUser})
     }catch(err){
         res.json({success:false,error:err.message})
     }
 }
