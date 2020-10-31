"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _forgotPassword = _interopRequireDefault(require("../../validations/forgotPassword"));

var _forgotPassword2 = require("../../middlewares/forgotPassword");

var _account = require("../../emails/account");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post("/", _forgotPassword["default"], _forgotPassword2.isUser, _forgotPassword2.createToken, _account.resetPassword);
var _default = router;
exports["default"] = _default;