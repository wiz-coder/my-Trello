import jwt from "jsonwebtoken"
import User from "../models/user"

export const verifyUserCookie = (req,res,next) => {
    try{
        const token = req.cookies['Authorization'].split(' ')[1]
        const decodedObj = jwt.verify(token,process.env.LOGIN_TOKEN_SECRET)
        req.email = decodedObj.email
        console.log(req.email,decodedObj)
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const isUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.email}).populate([
            {
                path: "projects",
                model: "Project",
                populate: {
                    path: "tasks",
                    model:"Task"
                }
            }
        ])
        if(!specificUser) return res.json({success:false,error:'[Tampered Cookie]: Invalid User'})
        req.userID = specificUser._id
        req.user = specificUser
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

