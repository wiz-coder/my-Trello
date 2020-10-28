import Joi from "joi"

const resetPasswordSchema = Joi.object({
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
    repeat_password: Joi.ref('password'),

})

const resetPasswordValidation = (req,res,next) => {
    if(req.body.password !== req.body.repeat_password) return res.json({success:false,error:"Passwords do not match"})
    const validation = resetPasswordSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default resetPasswordValidation 