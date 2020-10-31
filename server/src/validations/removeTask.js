import Joi from "joi"

const removeTaskSchema = Joi.object({
    status:Joi.string().valid('TODO','IN-PROGRESS','COMPLETED','TESTED','UNDER-REVIEW','MERGED','REDO').required(),
    ID:Joi.string().required(),
    taskID:Joi.string().required()
})

const removeTaskValidation = (req,res,next) => {
    try{
        const Validation = removeTaskSchema.validate(req.body)
        if(Validation.error) return res.json({success:false,error:Validation.error.message})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default removeTaskValidation