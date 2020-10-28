import jwt from "jsonwebtoken"
import User from "../models/user"

export const signupToken = (req,res,next)=>{
    const token  = jwt.sign({
        ...req.body
      }, process.env.SIGNUP_TOKEN_SECRET, { expiresIn: '1h' })   
      req.token = token
    next()
}

export const checkUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({email:req.body.email})
        if(specificUser) return res.json({success:false,error:"User already exists"})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}
