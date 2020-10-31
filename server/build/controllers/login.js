"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendLoginToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cookieConfig = require("../config/cookieConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sendLoginToken = function sendLoginToken(req, res) {
  try {
    var loginToken = _jsonwebtoken["default"].sign({
      email: req.user.email
    }, process.env.LOGIN_TOKEN_SECRET, {
      expiresIn: '24h'
    });

    res.cookie('Authorization', "Bearer ".concat(loginToken), _cookieConfig.cookieConfig).json({
      success: true,
      message: "login successful",
      data: req.user
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.sendLoginToken = sendLoginToken;