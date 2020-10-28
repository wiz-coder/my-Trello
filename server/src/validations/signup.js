import Joi from "joi"

const signupSchema = Joi.object({
    firstname: Joi.string().min(3).max(10).required(),
    lastname: Joi.string().min(3).max(10).required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required()  
})

const signupValidation = (req,res,next) => {
    const validation = signupSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default signupValidation