import cloudinary from "./cloudinary"

export const uploadToCloudinary = async (req,res,next) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        req.resImage = result
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

