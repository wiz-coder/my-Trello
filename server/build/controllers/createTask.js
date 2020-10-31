"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _user = _interopRequireDefault(require("../models/user"));

var _project = _interopRequireDefault(require("../models/project"));

var _task = _interopRequireDefault(require("../models/task"));

var _envOptions = require("dotenv/lib/env-options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var creationTime, modifiedTime, newTask, savedTask, updatedProject, resUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            creationTime = (0, _moment["default"])().format('llll');
            modifiedTime = (0, _moment["default"])().format('llll');
            newTask = new _task["default"]({
              description: req.body.description,
              author: req.email,
              createdAt: creationTime,
              lastModified: modifiedTime,
              status: 'TODO'
            });
            _context.next = 6;
            return newTask.save();

          case 6:
            savedTask = _context.sent;
            _context.next = 9;
            return _project["default"].updateOne({
              _id: req.body.ID
            }, {
              $push: {
                tasks: savedTask._id
              }
            });

          case 9:
            updatedProject = _context.sent;
            _context.next = 12;
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

          case 12:
            resUser = _context.sent;
            res.json({
              success: true,
              message: "new Task has been created and added successfully",
              data: resUser
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            res.json({
              success: false,
              error: _context.t0.message
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function createTask(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTask = createTask;