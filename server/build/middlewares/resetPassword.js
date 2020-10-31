"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.isTokenValid = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isTokenValid = function isTokenValid(req, res, next) {
  try {
    var decodedObj = _jsonwebtoken["default"].verify(req.query.forgotPassword, process.env.FORGOT_PASSWORD_TOKEN_SECRET);

    req.email = decodedObj.email;
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.isTokenValid = isTokenValid;

var hashPassword = function hashPassword(req, res, next) {
  try {
    var hashedPassword = _bcryptjs["default"].hashSync(req.body.password, 8);

    req.password = hashedPassword;
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.hashPassword = hashPassword;