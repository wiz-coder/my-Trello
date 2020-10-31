"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProjectFromUsers = exports.isProjectExists = void 0;

var _project = _interopRequireDefault(require("../models/project"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isProjectExists = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var specificProject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _project["default"].findById(req.body.ID);

          case 3:
            specificProject = _context.sent;

            if (specificProject) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              success: false,
              error: "Project doesn't exist"
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

  return function isProjectExists(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.isProjectExists = isProjectExists;

var removeProjectFromUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var updateUsersInProject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].updateMany({
              projects: req.body.ID
            }, {
              $pull: {
                projects: req.body.ID
              }
            });

          case 3:
            updateUsersInProject = _context2.sent;
            next();
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.json({
              success: false,
              error: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function removeProjectFromUsers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.removeProjectFromUsers = removeProjectFromUsers;