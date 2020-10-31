"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var forgotPasswordSchema = _joi["default"].object({
  email: _joi["default"].string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'org', 'in']
    }
  }).required()
});

var forgotPasswordValidation = function forgotPasswordValidation(req, res, next) {
  var validation = forgotPasswordSchema.validate(req.body);
  if (validation.error) return res.json({
    success: false,
    error: validation.error.message
  });
  next();
};

var _default = forgotPasswordValidation;
exports["default"] = _default;