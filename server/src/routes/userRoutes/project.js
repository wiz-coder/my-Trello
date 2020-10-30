import {Router} from "express"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import projectTitleValidation from "../../validations/createProject"
import projectIDValidation from "../../validations/removeProject"
import {isTitleUnique} from "../../middlewares/createProject"
import {createProject,addEditorOrViewer,removeEditorOrViewer,removeProject} from "../../controllers/project"
import editorOrViewerValidation from "../../validations/updateProjectEditorOrViewer"
import {userExists,isModifierOwner,editorOrViewerExists,editorOrViewerNotExists} from "../../middlewares/editorOrViewerExists"
import {isProjectExists,removeProjectFromUsers} from "../../middlewares/removeProject"
import taskRoute from "./task"
const router = Router()

//creation of project
router.patch('/createProject',verifyUserCookie,isUser,projectTitleValidation,isTitleUnique,createProject)

//update the project eg: adding editors, viewers,
router.patch('/addEditorOrViewer',verifyUserCookie,isUser,editorOrViewerValidation,userExists,isModifierOwner,editorOrViewerExists,addEditorOrViewer)

//update the project eg: removing editors, viewers
router.patch('/removeEditorOrViewer',verifyUserCookie,isUser,editorOrViewerValidation,userExists,isModifierOwner,editorOrViewerNotExists,removeEditorOrViewer)

//deleting the entire project
router.patch('/deleteProject',verifyUserCookie,isUser,projectIDValidation,isProjectExists,removeProjectFromUsers,removeProject)

//creating, modifying and deleting tasks
router.use('/task',taskRoute)

export default router