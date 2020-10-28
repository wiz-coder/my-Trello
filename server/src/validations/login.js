import Joi from "joi"

const loginSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required()  
})

const loginValidation = (req,res,next) => {
    const validation = loginSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default loginValidation