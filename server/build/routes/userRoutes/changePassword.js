"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authorizeUser = require("../../middlewares/authorizeUser");

var _resetPassword = require("../../middlewares/resetPassword");

var _resetPassword2 = _interopRequireDefault(require("../../validations/resetPassword"));

var _changePassword = require("../../controllers/changePassword");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.patch('/', _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _resetPassword2["default"], _resetPassword.hashPassword, _changePassword.resetPassword);
var _default = router;
exports["default"] = _default;