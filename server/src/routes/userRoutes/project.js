import {Router} from "express"
import {verifyUserCookie,isUser} from "../../middlewares/authorizeUser"
import projectTitleValidation from "../../validations/createProject"
import projectIDValidation from "../../validations/removeProject"
import {isTitleUnique} from "../../middlewares/createProject"
import {createProject,addEditorOrViewer,removeEditorOrViewer,removeProject} from "../../controllers/project"
import editorOrViewerValidation from "../../validations/updateProjectEditorOrViewer"
import {userExists,isModifierOwner,editorOrViewerExists,editorOrViewerNotExists} from "../../middlewares/editorOrViewerExists"
import {isProjectExists,removeProjectFromUsers} from "../../middlewares/removeProject"
const router = Router()

//creation of project
router.patch('/',verifyUserCookie,isUser,projectTitleValidation,isTitleUnique,createProject)

//update the project eg: adding editors, viewers,
router.patch('/',verifyUserCookie,isUser,editorOrViewerValidation,userExists,isModifierOwner,editorOrViewerExists,addEditorOrViewer)

//update the project eg: removing editors, viewers
router.patch('/',verifyUserCookie,isUser,editorOrViewerValidation,userExists,isModifierOwner,editorOrViewerNotExists,removeEditorOrViewer)

//modifying the tasks i.e under-review,merged,redo
router.patch('/')

//deleting the entire project
router.patch('/',verifyUserCookie,isUser,projectIDValidation,isProjectExists,removeProjectFromUsers,removeProject)


export default router