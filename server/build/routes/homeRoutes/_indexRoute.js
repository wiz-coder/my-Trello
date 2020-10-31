"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _signup = _interopRequireDefault(require("./signup"));

var _login = _interopRequireDefault(require("./login"));

var _forgotPassword = _interopRequireDefault(require("./forgotPassword"));

var _verifyUser = _interopRequireDefault(require("./verifyUser"));

var _resetPassword = _interopRequireDefault(require("./resetPassword"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/signup', _signup["default"]);
router.use('/verifyUser', _verifyUser["default"]);
router.use('/login', _login["default"]);
router.use('/forgotPassword', _forgotPassword["default"]);
router.use('/resetPassword', _resetPassword["default"]);
var _default = router;
exports["default"] = _default;