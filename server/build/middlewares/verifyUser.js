"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifySignupToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifySignupToken = function verifySignupToken(req, res, next) {
  try {
    var decoded = _jsonwebtoken["default"].verify(req.query.user, process.env.SIGNUP_TOKEN_SECRET);

    req.userData = decoded;
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.verifySignupToken = verifySignupToken;