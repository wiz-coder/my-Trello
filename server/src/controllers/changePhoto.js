import User from "../models/user"

export const updatePhoto = async (req,res,next) => {
    try{
        const updatedUser = await User.updateOne({email:req.email},{
            $set:{
                imageURL:req.resImage.secure_url,
                imageID: req.resImage.public_id
            }
        })
        const resUser = await User.findOne({email:updatedUser.email})
        res.json({success:true,message:'Image updated successfully',data:resUser})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}