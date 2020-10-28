import Joi from "joi"

// const firstname = /^[a-zA-Z]{3,10}$/i
// const lastname = /^[a-zA-Z]{3,10}$/i
// const email = /^\w{3,25}[^_]@[a-z]{2,10}\.com|net|org|in|gov$/
// const password = /^[a-zA-Z]\w{3,9}[a-zA-Z0-9]{1,5}$/

export const signupSchema = Joi.object({
  firstname: Joi.string().min(3).max(10).required(),
  lastname: Joi.string().min(3).max(10).required(),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
  password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required()
})

export const loginSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required()
  })

export const resetPasswordSchema = Joi.object({
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
    repeat_password: Joi.ref('password')
})

export const emailVerificationSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org','in'] } }).required()
})

