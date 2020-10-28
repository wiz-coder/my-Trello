import {Router} from "express"
import upload from "../../middlewares/multer"
import {uploadToCloudinary} from "../../middlewares/changePhoto"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import {updatePhoto} from "../../controllers/changePhoto"

const router = Router()

router.patch('/',upload.single('image'),verifyUserCookie,isUser,uploadToCloudinary,updatePhoto)

export default router