import User from "../models/user"

export const resetPassword = async (req,res,next) => {
   try{
    const updatedUser = await User.updateOne({email:req.email},{
        $set:{
            password:req.password
        }
    })
    res.json({success:true,message:"Password has been reset"})
   }catch(err){
       res.json({success:false,error:err.message})
   }
}