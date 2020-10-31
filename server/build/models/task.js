"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = new _mongoose["default"].Schema({
  description: {
    type: String,
    required: true,
    minlength: 2
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['TODO', 'IN-PROGRESS', 'COMPLETED', 'TESTED', 'UNDER-REVIEW', 'MERGED', 'REDO'],
    "default": "TODO"
  },
  lastModified: {
    type: String,
    required: true
  }
});

var TaskModel = _mongoose["default"].model("Task", Task);

var _default = TaskModel;
exports["default"] = _default;