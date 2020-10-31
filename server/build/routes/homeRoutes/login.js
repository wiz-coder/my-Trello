"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _login = _interopRequireDefault(require("../../validations/login"));

var _login2 = require("../../middlewares/login");

var _login3 = require("../../controllers/login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _login["default"], _login2.isUser, _login2.checkCredentials, _login3.sendLoginToken);
var _default = router;
exports["default"] = _default;