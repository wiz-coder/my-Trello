"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  tasks: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Task"
  }],
  owner: {
    type: String
  },
  editors: [String],
  viewers: [String],
  stages: {
    type: [String],
    "default": ['TODO', 'IN-PROGRESS', 'COMPLETED', 'TESTED', 'UNDER-REVIEW', 'MERGED', 'REDO']
  }
});

var ProjectModel = _mongoose["default"].model("Project", Project);

var _default = ProjectModel;
exports["default"] = _default;