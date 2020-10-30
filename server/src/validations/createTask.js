import Joi from "joi"

const createTaskSchema = Joi.object({
    description: Joi.string().min(3).required(),
    ID: Joi.string().required()
})

const createTaskValidation = (req,res,next) => {
    const Validation = createTaskSchema.validate(req.body)
    if(Validation.error) return res.json({success:false,error:Validation.error})
    next()
}

export default createTaskValidation