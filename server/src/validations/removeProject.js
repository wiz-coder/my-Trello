import Joi from "joi"

const projectIDSchema = Joi.object({
    ID:Joi.string().min(3).required()
})

const projectIDValidation = (req,res,next) => {
    const Validation = projectIDSchema.validate(req.body)
    if(Validation.error) return res.json({success:false,error:Validation.error.message})
    next()
}

export default projectIDValidation