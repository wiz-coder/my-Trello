import User from "../models/user"
import Project from "../models/project"

export const userExists = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.body.email})
        if(!specificUser) return res.json({success:false,error:"User doesn't exist in database"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}


export const isModifierOwner = async (req,res,next) =>{
    try{
        const specificProject = await Project.findById(req.body.projectID)
        if(specificProject.owner !== req.email) return res.json({success:false,error:"Only owner is authorized to do this modification"})
        req.project = specificProject
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const editorOrViewerExists = (req,res,next) => {
    try{
        switch(req.body.role){
            case "editor":
                const editorExists = req.project.editors.filter(editor=>editor === req.body.email)
                if(editorExists) return res.json({success:false,error:req.body.email+" already in the editors' list"})
                next()
            case "viewer":
                const viewerExists = req.project.viewers.filter(viewer=>viewer === req.body.email)
                if(viewerExists) return res.json({success:false,error:req.body.email+" already in the viewers' list"})
                next()
        }
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const editorOrViewerNotExists = (req,res,next) => {
    try{
        switch(req.body.role){
            case "editor":
                const editorExists = req.project.editors.filter(editor=>editor === req.body.email)
                if(!editorExists) return res.json({success:false,error:req.body.email+" doesn't in the editors' list"})
                next()
            case "viewer":
                const viewerExists = req.project.viewers.filter(viewer=>viewer === req.body.email)
                if(viewerExists) return res.json({success:false,error:req.body.email+" doesn't in the viewers' list"})
                next()
        }
    }catch(err){
        res.json({success:false,error:err.message})
    }
}