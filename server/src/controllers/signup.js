import User from "../models/user"
import bcrypt from "bcryptjs"

export const createUser = async (req,res,next) => {
    try{
        const encrptedPassword = bcrypt.hashSync(req.userData.password,8)
        const newUser = new User({
            firstname:req.userData.firstname,
            lastname:req.userData.lastname,
            email:req.userData.email,
            password:encrptedPassword,
            projects:[]
        })
        const savedUser = await newUser.save()
        res.json({success:true,message:"User created successfully"})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}