import {Router} from "express"
import {verifySignupToken} from "../../middlewares/verifyUser"
import {createUser} from "../../controllers/signup"

const router = Router()

router.post('',verifySignupToken,createUser)

export default router