"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _resetPassword = _interopRequireDefault(require("../../validations/resetPassword"));

var _resetPassword2 = require("../../middlewares/resetPassword");

var _resetPassword3 = require("../../controllers/resetPassword");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.patch('/', _resetPassword["default"], _resetPassword2.isTokenValid, _resetPassword2.hashPassword, _resetPassword3.resetPassword);
var _default = router;
exports["default"] = _default;