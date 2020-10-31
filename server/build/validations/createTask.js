"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createTaskSchema = _joi["default"].object({
  description: _joi["default"].string().min(3).required(),
  ID: _joi["default"].string().required()
});

var createTaskValidation = function createTaskValidation(req, res, next) {
  var Validation = createTaskSchema.validate(req.body);
  if (Validation.error) return res.json({
    success: false,
    error: Validation.error
  });
  next();
};

var _default = createTaskValidation;
exports["default"] = _default;