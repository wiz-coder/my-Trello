"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _signup = _interopRequireDefault(require("../../validations/signup"));

var _signup2 = require("../../middlewares/signup");

var _account = require("../../emails/account");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _signup["default"], _signup2.checkUser, _signup2.signupToken, _account.verifyUser);
var _default = router;
exports["default"] = _default;