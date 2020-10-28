import jwt from "jsonwebtoken"
import User from "../models/user"

export const verifyUserCookie = (req,res,next) => {
    try{
        const token = req.cookies['Authorization'].split(' ')[1]
        const decodedObj = jwt.verify(token,process.env.LOGIN_TOKEN_SECRET)
        req.email = decodedObj.email
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const isUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.email})
        if(!specificUser) return res.json({success:false,error:'[Tampered Cookie]: Invalid User'})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

