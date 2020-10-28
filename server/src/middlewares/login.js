import bcrypt from "bcryptjs"
import User from "../models/user"

export const isUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.body.email}).populate('projects')
        if(!specificUser) return res.json({success:false,error:"User doesn't exist"})
        req.user = specificUser
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const checkCredentials = (req,res,next) =>{
    try{
        const passwordCheck = bcrypt.compareSync(req.body.password,req.user.password)
        if(!passwordCheck) return res.json({success:false,error:"Invalid Credentials"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}