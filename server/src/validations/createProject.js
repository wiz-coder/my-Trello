import Joi from "joi"

const projectTitleSchema = Joi.object({
    title:Joi.string().min(3).required()
})

const projectTitleValidation = (req,res,next) => {
    const Validation = projectTitleSchema.validate(req.body)
    if(Validation.error) return res.json({success:false,error:Validation.error.message})
    next()
}

export default projectTitleValidation