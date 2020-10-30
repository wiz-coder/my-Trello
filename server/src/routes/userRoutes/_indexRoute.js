import {Router} from "express"

const router = Router()

import changePasswordRoute from "./changePassword"
import changePhotoRoute from "./changePhoto"
import projectRoute from "./project"

router.use('/changePassword',changePasswordRoute)
router.use('/changePhoto',changePhotoRoute)
router.use('/project',projectRoute)

export default router 