"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = new _mongoose["default"].Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    "default": ""
  },
  imageID: {
    type: String,
    "default": ""
  },
  projects: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Project"
  }]
});

var UserModel = _mongoose["default"].model("User", User);

var _default = UserModel;
exports["default"] = _default;