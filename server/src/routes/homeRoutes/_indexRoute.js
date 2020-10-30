import {Router} from "express"

const router = Router()

import signupRoute from "./signup"
import loginRoute from "./login"
import forgotPasswordRoute from "./forgotPassword"
import verifyUserRoute from "./verifyUser"
import resetPasswordRoute from "./resetPassword"


router.use('/signup',signupRoute)
router.use('/verifyUser',verifyUserRoute)
router.use('/login',loginRoute)
router.use('/forgotPassword',forgotPasswordRoute)
router.use('/resetPassword',resetPasswordRoute)


export default router