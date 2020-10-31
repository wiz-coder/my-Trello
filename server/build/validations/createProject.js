"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectTitleSchema = _joi["default"].object({
  title: _joi["default"].string().min(3).required()
});

var projectTitleValidation = function projectTitleValidation(req, res, next) {
  var Validation = projectTitleSchema.validate(req.body);
  if (Validation.error) return res.json({
    success: false,
    error: Validation.error.message
  });
  next();
};

var _default = projectTitleValidation;
exports["default"] = _default;