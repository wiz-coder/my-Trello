"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signupSchema = _joi["default"].object({
  firstname: _joi["default"].string().min(3).max(10).required(),
  lastname: _joi["default"].string().min(3).max(10).required(),
  email: _joi["default"].string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'org', 'in']
    }
  }).required(),
  password: _joi["default"].string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required()
});

var signupValidation = function signupValidation(req, res, next) {
  var validation = signupSchema.validate(req.body);
  if (validation.error) return res.json({
    success: false,
    error: validation.error.message
  });
  next();
};

var _default = signupValidation;
exports["default"] = _default;