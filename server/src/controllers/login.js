import jwt from "jsonwebtoken"
import {cookieConfig} from "../config/cookieConfig"

export const sendLoginToken = (req,res) => {
    try{
        const loginToken = jwt.sign({email:req.user.email},process.env.LOGIN_TOKEN_SECRET,{expiresIn:'24h'})
        res.cookie('Authorization',`Bearer ${loginToken}`,cookieConfig).json({success:true,message:"login successful",data:req.user})


    }catch(err){
        res.json({success:false,error:err.message})
    }
}