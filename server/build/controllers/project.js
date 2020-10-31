"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProject = exports.removeEditorOrViewer = exports.addEditorOrViewer = exports.createProject = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _project = _interopRequireDefault(require("../models/project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProject = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var editors, viewers, newProject, savedProject, updatedUser, resUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            editors = [req.email];
            viewers = [req.email];
            newProject = new _project["default"]({
              title: req.body.title,
              owner: req.email,
              editors: editors,
              viewers: viewers,
              stages: ['TODO', 'IN-PROGRESS', 'COMPLETED', 'TESTED', 'UNDER-REVIEW', 'MERGED', 'REDO']
            });
            _context.next = 6;
            return newProject.save();

          case 6:
            savedProject = _context.sent;
            _context.next = 9;
            return _user["default"].updateOne({
              email: req.email
            }, {
              $push: {
                projects: savedProject._id
              }
            });

          case 9:
            updatedUser = _context.sent;
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
              message: "Project created successfully",
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

  return function createProject(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProject = createProject;

var addEditorOrViewer = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var updatedProject, updatedEditor, updatedUser, updatedViewer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = req.body.role;
            _context2.next = _context2.t0 === "editor" ? 4 : _context2.t0 === "viewer" ? 14 : 24;
            break;

          case 4:
            _context2.next = 6;
            return _project["default"].updateOne({
              _id: req.body.projectID
            }, {
              $push: {
                editors: req.body.email,
                viewers: req.body.email
              }
            });

          case 6:
            updatedProject = _context2.sent;
            _context2.next = 9;
            return _user["default"].updateOne({
              email: req.body.email
            }, {
              $push: {
                projects: updatedProject._id
              }
            });

          case 9:
            updatedEditor = _context2.sent;
            _context2.next = 12;
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
            updatedUser = _context2.sent;
            return _context2.abrupt("return", req.json({
              success: true,
              message: 'Added ' + req.body.email + ' as editor',
              data: updatedUser
            }));

          case 14:
            _context2.next = 16;
            return _project["default"].updateOne({
              _id: req.body.projectID
            }, {
              $push: {
                viewers: req.body.email
              }
            });

          case 16:
            updatedProject = _context2.sent;
            _context2.next = 19;
            return _user["default"].updateOne({
              email: req.body.email
            }, {
              $push: {
                projects: updatedProject._id
              }
            });

          case 19:
            updatedViewer = _context2.sent;
            _context2.next = 22;
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

          case 22:
            updatedUser = _context2.sent;
            return _context2.abrupt("return", res.json({
              success: true,
              message: 'Added ' + req.body.email + ' as viewer',
              data: updatedUser
            }));

          case 24:
            _context2.next = 29;
            break;

          case 26:
            _context2.prev = 26;
            _context2.t1 = _context2["catch"](0);
            res.json({
              success: false,
              error: _context2.t1.message
            });

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 26]]);
  }));

  return function addEditorOrViewer(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addEditorOrViewer = addEditorOrViewer;

var removeEditorOrViewer = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var updatedProject, updatedEditor, updatedUser, updatedViewer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = req.body.role;
            _context3.next = _context3.t0 === "editor" ? 4 : _context3.t0 === "viewer" ? 14 : 24;
            break;

          case 4:
            _context3.next = 6;
            return _project["default"].updateOne({
              _id: req.body.projectID
            }, {
              $pull: {
                editors: req.body.email,
                viewers: req.body.email
              }
            });

          case 6:
            updatedProject = _context3.sent;
            _context3.next = 9;
            return _user["default"].updateOne({
              email: req.body.email
            }, {
              $pull: {
                projects: updatedProject._id
              }
            });

          case 9:
            updatedEditor = _context3.sent;
            _context3.next = 12;
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
            updatedUser = _context3.sent;
            return _context3.abrupt("return", req.json({
              success: true,
              message: 'Added ' + req.body.email + ' as editor',
              data: updatedUser
            }));

          case 14:
            _context3.next = 16;
            return _project["default"].updateOne({
              _id: req.body.projectID
            }, {
              $pull: {
                viewers: req.body.email
              }
            });

          case 16:
            updatedProject = _context3.sent;
            _context3.next = 19;
            return _user["default"].updateOne({
              email: req.body.email
            }, {
              $pull: {
                projects: updatedProject._id
              }
            });

          case 19:
            updatedViewer = _context3.sent;
            _context3.next = 22;
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

          case 22:
            updatedUser = _context3.sent;
            return _context3.abrupt("return", res.json({
              success: true,
              message: 'Added ' + req.body.email + ' as viewer',
              data: updatedUser
            }));

          case 24:
            _context3.next = 29;
            break;

          case 26:
            _context3.prev = 26;
            _context3.t1 = _context3["catch"](0);
            res.json({
              success: false,
              error: _context3.t1.message
            });

          case 29:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 26]]);
  }));

  return function removeEditorOrViewer(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.removeEditorOrViewer = removeEditorOrViewer;

var removeProject = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var deletedProject, resUser;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _project["default"].deleteOne({
              _id: req.body.ID
            });

          case 3:
            deletedProject = _context4.sent;
            _context4.next = 6;
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

          case 6:
            resUser = _context4.sent;
            res.json({
              success: true,
              message: "Project succeffully deleted",
              data: resUser
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.json({
              success: false,
              error: _context4.t0.message
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function removeProject(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.removeProject = removeProject;