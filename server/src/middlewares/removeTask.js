import Project from "../models/project"

export const isUserAuthorisedToRemoveTask = (req,res,next) =>{
    try{
        const notAuthorisedStatus = ['UNDER-REVIEW','MERGED']
        const notAuthorisedForNonOwner = ['UNDER-REVIEW','MERGED','REDO']
        if(req.project.owner == req.email && req.task.status == "REDO" ) next()
        else if(req.project.owner == req.email && notAuthorisedStatus.includes(req.task.status) ) return res.json({success:false,error:"The delete operation is not accessible in this stage"})
        else if (req.project.owner != req.email){
            if(req.project.editors.includes(req.email)){
                if(notAuthorisedForNonOwner.includes(req.task.status)) return res.json({success:false,error:req.email+" not authorised to remove task at this stage"})
                else next()
            }else{
                res.json({success:false,error:req.email+" not authorised to perform this operation"})
            }
        }
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const removeTaskFromProject = async (req,res,next) => {
    try{
        const updatedProject = await Project.updateOne({_id:req.body.ID},{
            $pull:{
                tasks:{_id:req.body.taskID}
            }
        })
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}