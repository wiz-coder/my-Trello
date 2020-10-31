"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("../../middlewares/multer"));

var _changePhoto = require("../../middlewares/changePhoto");

var _authorizeUser = require("../../middlewares/authorizeUser");

var _changePhoto2 = require("../../controllers/changePhoto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.patch('/', _multer["default"].single('image'), _authorizeUser.verifyUserCookie, _authorizeUser.isUser, _changePhoto.uploadToCloudinary, _changePhoto2.updatePhoto);
var _default = router;
exports["default"] = _default;