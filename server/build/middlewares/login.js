"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCredentials = exports.isUser = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _user = _interopRequireDefault(require("../models/user"));

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
            }).populate('projects');

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
            req.user = specificUser;
            next();
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.json({
              success: false,
              error: _context.t0.message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function isUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.isUser = isUser;

var checkCredentials = function checkCredentials(req, res, next) {
  try {
    var passwordCheck = _bcryptjs["default"].compareSync(req.body.password, req.user.password);

    if (!passwordCheck) return res.json({
      success: false,
      error: "Invalid Credentials"
    });
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.checkCredentials = checkCredentials;