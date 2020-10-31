"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifyUser = require("../../middlewares/verifyUser");

var _signup = require("../../controllers/signup");

var router = (0, _express.Router)();
router.post('', _verifyUser.verifySignupToken, _signup.createUser);
var _default = router;
exports["default"] = _default;