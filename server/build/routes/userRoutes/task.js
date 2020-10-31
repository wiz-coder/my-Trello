"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authorizeUser = require("../../middlewares/authorizeUser");

var _createTask = _interopRequireDefault(require("../../validations/createTask"));

var _createTask2 = require("../../middlewares/createTask");

var _createTask3 = require("../../controllers/createTask");

var _modifyTaskStatus = require("../../controllers/modifyTaskStatus");

var _modifyTaskStatus2 = require("../../middlewares/modifyTaskStatus");

var _modifyTaskStatus3 = _interopRequireDefault(require("../../validations/modifyTaskStatus"));

var _removeTask = _interopRequireDefault(require("../../validations/removeTask"));

var _removeTask2 = require("../../middlewares/removeTask");

var _removeTask3 = require("../../controllers/removeTask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // create Task (possible only if the user is editor)

router.post('/createTask', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _createTask["default"], _createTask2.doesProjectExists, _createTask2.isUserEditor, _createTask3.createTask); // modify the status of the task (possible only if the user is editor)

router.patch('/modifyStatus', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _modifyTaskStatus3["default"], _createTask2.doesProjectExists, _modifyTaskStatus2.doesTaskExist, _createTask2.isUserEditor, _modifyTaskStatus2.isUserAuthorisedToModify, _modifyTaskStatus.modifyTaskStatus); // delete the task (possible only if the user is editor)

router["delete"]('/removeTask', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _removeTask["default"], _createTask2.doesProjectExists, _modifyTaskStatus2.doesTaskExist, _removeTask2.isUserAuthorisedToRemoveTask, _removeTask2.removeTaskFromProject, _removeTask3.deleteTask);
var _default = router;
exports["default"] = _default;