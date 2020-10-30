import User from "../models/user"

export const resetPassword = async (req,res,next) => {
   try{
    const updatedUser = await User.updateOne({email:req.email},{
        $set:{
            password:req.password
        }
    })
    const resUser = await User.findOne({email:req.email}).populate([
        {
            path: "projects",
            model: "Project",
            populate: {
                path: "tasks",
                model:"Task"
            }
        }
    ])    
    res.json({success:true,message:"Password has been changed",data:resUser})
   }catch(err){
       res.json({success:false,error:err.message})
   }
}