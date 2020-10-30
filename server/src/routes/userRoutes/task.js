import {Router} from "express"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import createTaskValidation from "../../validations/createTask"
import {doesProjectExists,isUserEditor} from "../../middlewares/createTask"
import {createTask} from "../../controllers/createTask" 

const router = Router()

// create Task (possible only if the user is editor)
router.post('/createTask',verifyUserCookie,isUser,createTaskValidation,doesProjectExists,isUserEditor,createTask)

// modify the content of the task (possible only if the user is editor)
//  

// modify the status of the task (possible only if the user is editor)
router.patch('/modifyStatus')

// delete the task (possible only if the user is editor)
router.delete('/removeTask')

export default router