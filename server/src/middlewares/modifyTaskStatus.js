 
export const isUserAuthorisedToModify = (req,res,next) => {
    try{
        const isOwner = req.project.owner == req.user.email
        if(isOwner) next()
        else {
            switch(req.body.status){
                case "UNDER-REVIEW":
                case  "MERGED":
                case "REDO":
                    return res.json({success:false,error:"User is not authorised to perform this operation"})
                default:
                    next()
            }
        }
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const doesTaskExist = (req,res,next) => {
    try{
        const specificTask = req.project[0].tasks.filter(task=>task == req.body.taskID)
        if(specificTask.length < 1) return res.json({success:false,error:"Task doesn't exist"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}