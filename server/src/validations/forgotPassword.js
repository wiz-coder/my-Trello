import Joi from "joi"

const forgotPasswordSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
     
})

const forgotPasswordValidation = (req,res,next) => {
    const validation = forgotPasswordSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default forgotPasswordValidation