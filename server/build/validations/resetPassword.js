"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resetPasswordSchema = _joi["default"].object({
  password: _joi["default"].string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
  repeat_password: _joi["default"].ref('password')
});

var resetPasswordValidation = function resetPasswordValidation(req, res, next) {
  if (req.body.password !== req.body.repeat_password) return res.json({
    success: false,
    error: "Passwords do not match"
  });
  var validation = resetPasswordSchema.validate(req.body);
  if (validation.error) return res.json({
    success: false,
    error: validation.error.message
  });
  next();
};

var _default = resetPasswordValidation;
exports["default"] = _default;