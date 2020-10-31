"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUser = exports.verifyUserCookie = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyUserCookie = function verifyUserCookie(req, res, next) {
  try {
    var token = req.cookies['Authorization'].split(' ')[1];

    var decodedObj = _jsonwebtoken["default"].verify(token, process.env.LOGIN_TOKEN_SECRET);

    req.email = decodedObj.email;
    console.log(req.email, decodedObj);
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.verifyUserCookie = verifyUserCookie;

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
              email: req.email
            }).populate([{
              path: "projects",
              model: "Project",
              populate: {
                path: "tasks",
                model: "Task"
              }
            }]);

          case 3:
            specificUser = _context.sent;

            if (specificUser) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              success: false,
              error: '[Tampered Cookie]: Invalid User'
            }));

          case 6:
            req.userID = specificUser._id;
            req.user = specificUser;
            next();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.json({
              success: false,
              error: _context.t0.message
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function isUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.isUser = isUser;