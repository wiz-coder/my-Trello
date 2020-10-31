"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _changePassword = _interopRequireDefault(require("./changePassword"));

var _changePhoto = _interopRequireDefault(require("./changePhoto"));

var _project = _interopRequireDefault(require("./project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/changePassword', _changePassword["default"]);
router.use('/changePhoto', _changePhoto["default"]);
router.use('/project', _project["default"]);
var _default = router;
exports["default"] = _default;