import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const isTokenValid = (req,res,next) => {
    try{
        const decodedObj = jwt.verify(req.query.forgotPassword,process.env.FORGOT_PASSWORD_TOKEN_SECRET)
        req.email = decodedObj.email
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const hashPassword = (req,res,next) => {
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password,8)
        req.password = hashedPassword
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}