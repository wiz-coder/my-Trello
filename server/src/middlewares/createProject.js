


export const isTitleUnique = (req,res,next) => {
    try{
        if(!req.user.projects) next()
        const titleExist = req.user.projects.filter(project=>project.title === req.body.title)
        if(titleExist.length>0) return res.json({success:false,error:"Project with given Title exists"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
} 