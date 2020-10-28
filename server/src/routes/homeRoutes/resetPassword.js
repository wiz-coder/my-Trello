import {Router} from "express"
import resetPasswordValidation from "../../validations/resetPassword"
import {isTokenValid,hashPassword} from "../../middlewares/resetPassword"
import {resetPassword} from "../../controllers/resetPassword"

const router = Router()

router.patch('/',resetPasswordValidation,isTokenValid,hashPassword,resetPassword)

export default router