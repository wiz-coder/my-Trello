"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = exports.isUser = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var specificUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findOne({
              email: req.body.email
            });

          case 3:
            specificUser = _context.sent;

            if (specificUser) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              success: false,
              error: "User doesn't exist"
            }));

          case 6:
            next();
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.json({
              success: false,
              error: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function isUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.isUser = isUser;

var createToken = function createToken(req, res, next) {
  try {
    var resetPasswordToken = _jsonwebtoken["default"].sign({
      email: req.body.email
    }, process.env.FORGOT_PASSWORD_TOKEN_SECRET, {
      expiresIn: 600
    });

    req.token = resetPasswordToken;
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.createToken = createToken;