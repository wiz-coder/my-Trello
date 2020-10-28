import {Router } from "express"
import forgotPasswordValidation from "../../validations/forgotPassword"
import {isUser,createToken} from "../../middlewares/forgotPassword"
import {resetPassword} from "../../emails/account"

const router = Router()

router.post("/",forgotPasswordValidation,isUser,createToken,resetPassword)

export default router