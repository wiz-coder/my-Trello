import {Router} from "express"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import createTaskValidation from "../../validations/createTask"
import {doesProjectExists,isUserEditor} from "../../middlewares/createTask"
import {createTask} from "../../controllers/createTask" 
import {modifyTaskStatus} from "../../controllers/modifyTaskStatus"
import {isUserAuthorisedToModify,doesTaskExist} from "../../middlewares/modifyTaskStatus"
import modifyTaskStatusValidation from "../../validations/modifyTaskStatus"
import removeTaskValidation from "../../validations/removeTask"
import {isUserAuthorisedToRemoveTask,removeTaskFromProject} from "../../middlewares/removeTask"
import {deleteTask} from "../../controllers/removeTask"


const router = Router()

// create Task (possible only if the user is editor)
router.post('/createTask',verifyUserCookie,isUser,createTaskValidation,doesProjectExists,isUserEditor,createTask)

// modify the status of the task (possible only if the user is editor)
router.patch('/modifyStatus',verifyUserCookie,isUser,modifyTaskStatusValidation,doesProjectExists,doesTaskExist,isUserEditor,isUserAuthorisedToModify,modifyTaskStatus)

// delete the task (possible only if the user is editor)
router.delete('/removeTask',verifyUserCookie,isUser,removeTaskValidation,doesProjectExists,doesTaskExist,isUserAuthorisedToRemoveTask,removeTaskFromProject,deleteTask)

export default router