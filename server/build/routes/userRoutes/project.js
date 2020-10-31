"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authorizeUser = require("../../middlewares/authorizeUser");

var _createProject = _interopRequireDefault(require("../../validations/createProject"));

var _removeProject = _interopRequireDefault(require("../../validations/removeProject"));

var _createProject2 = require("../../middlewares/createProject");

var _project = require("../../controllers/project");

var _updateProjectEditorOrViewer = _interopRequireDefault(require("../../validations/updateProjectEditorOrViewer"));

var _editorOrViewerExists = require("../../middlewares/editorOrViewerExists");

var _removeProject2 = require("../../middlewares/removeProject");

var _task = _interopRequireDefault(require("./task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //creation of project

router.patch('/createProject', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _createProject["default"], _createProject2.isTitleUnique, _project.createProject); //update the project eg: adding editors, viewers,

router.patch('/addEditorOrViewer', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _updateProjectEditorOrViewer["default"], _editorOrViewerExists.userExists, _editorOrViewerExists.isModifierOwner, _editorOrViewerExists.editorOrViewerExists, _project.addEditorOrViewer); //update the project eg: removing editors, viewers

router.patch('/removeEditorOrViewer', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _updateProjectEditorOrViewer["default"], _editorOrViewerExists.userExists, _editorOrViewerExists.isModifierOwner, _editorOrViewerExists.editorOrViewerNotExists, _project.removeEditorOrViewer); //deleting the entire project

router.patch('/deleteProject', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _removeProject["default"], _removeProject2.isProjectExists, _removeProject2.removeProjectFromUsers, _project.removeProject); //creating, modifying and deleting tasks

router.use('/task', _task["default"]);
var _default = router;
exports["default"] = _default;