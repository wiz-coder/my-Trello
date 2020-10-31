"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectIDSchema = _joi["default"].object({
  ID: _joi["default"].string().min(3).required()
});

var projectIDValidation = function projectIDValidation(req, res, next) {
  var Validation = projectIDSchema.validate(req.body);
  if (Validation.error) return res.json({
    success: false,
    error: Validation.error.message
  });
  next();
};

var _default = projectIDValidation;
exports["default"] = _default;