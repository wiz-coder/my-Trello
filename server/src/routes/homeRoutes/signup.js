import {Router} from "express"
import signupValidation from "../../validations/signup"
import {signupToken,checkUser} from "../../middlewares/signup"
import {verifyUser} from "../../emails/account"

const router = Router()

router.post('/',signupValidation,checkUser,signupToken,verifyUser)

export default router