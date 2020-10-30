import {Router} from "express"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import {hashPassword} from "../../middlewares/resetPassword"
import resetPasswordValidation from "../../validations/resetPassword"
import {resetPassword} from "../../controllers/changePassword"


const router = Router()

router.patch('/',verifyUserCookie,isUser,resetPasswordValidation,hashPassword,resetPassword)

export default router