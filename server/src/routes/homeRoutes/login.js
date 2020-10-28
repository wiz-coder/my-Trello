import {Router } from "express"
import loginValidation from "../../validations/login"
import {isUser,checkCredentials} from "../../middlewares/login"
import {sendLoginToken} from "../../controllers/login"


const router = Router()

router.post('/',loginValidation,isUser,checkCredentials,sendLoginToken)

export default router