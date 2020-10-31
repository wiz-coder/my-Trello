"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modifyTaskStatusSchema = _joi["default"].object({
  status: _joi["default"].string().valid('TODO', 'IN-PROGRESS', 'COMPLETED', 'TESTED', 'UNDER-REVIEW', 'MERGED', 'REDO').required(),
  ID: _joi["default"].string().required(),
  taskID: _joi["default"].string().required()
});

var modifyTaskStatusValidation = function modifyTaskStatusValidation(req, res, next) {
  var Validation = modifyTaskStatusSchema.validate(req.body);
  if (Validation.error) return res.json({
    success: false,
    error: Validation.error.message
  });
  next();
};

var _default = modifyTaskStatusValidation;
exports["default"] = _default;