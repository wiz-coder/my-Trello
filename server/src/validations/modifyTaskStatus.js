import Joi from "joi"

const modifyTaskStatusSchema = Joi.object({
    status:Joi.string().valid('TODO','IN-PROGRESS','COMPLETED','TESTED','UNDER-REVIEW','MERGED','REDO').required(),
    ID: Joi.string().required(),
    taskID: Joi.string().required()
})

const modifyTaskStatusValidation = (req,res,next) => {
    const Validation = modifyTaskStatusSchema.validate(req.body)
    if(Validation.error) return res.json({success:false,error:Validation.error.message})
    next()
}

export default modifyTaskStatusValidation