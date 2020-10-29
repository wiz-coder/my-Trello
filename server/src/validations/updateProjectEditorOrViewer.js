import Joi from "joi"

const editorOrViewerSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
    role:Joi.string().required(),
    projectID: Joi.string().required()
     
})

const editorOrViewerValidation = (req,res,next) => {
    const validation = editorOrViewerSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default editorOrViewerValidation