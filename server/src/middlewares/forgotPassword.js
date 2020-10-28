import User from "../models/user"
import jwt from "jsonwebtoken"

export const isUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.body.email})
        if(!specificUser) return res.json({success:false,error:"User doesn't exist"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const createToken = (req,res,next) => {
    try{
        const resetPasswordToken = jwt.sign({email:req.body.email},process.env.FORGOT_PASSWORD_TOKEN_SECRET,{expiresIn:600})
        req.token = resetPasswordToken
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}