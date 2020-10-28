import jwt from "jsonwebtoken"

export const verifySignupToken = (req,res,next)=>{
   try{
        const decoded = jwt.verify(req.query.user,process.env.SIGNUP_TOKEN_SECRET)
        req.userData = decoded
        next()
   }catch(err){
       res.json({success:false,error:err.message})
   }
}

