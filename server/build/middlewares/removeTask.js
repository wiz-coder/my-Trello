"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeTaskFromProject = exports.isUserAuthorisedToRemoveTask = void 0;

var _project = _interopRequireDefault(require("../models/project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isUserAuthorisedToRemoveTask = function isUserAuthorisedToRemoveTask(req, res, next) {
  try {
    var notAuthorisedStatus = ['UNDER-REVIEW', 'MERGED'];
    var notAuthorisedForNonOwner = ['UNDER-REVIEW', 'MERGED', 'REDO'];
    if (req.project.owner == req.email && req.task.status == "REDO") next();else if (req.project.owner == req.email && notAuthorisedStatus.includes(req.task.status)) return res.json({
      success: false,
      error: "The delete operation is not accessible in this stage"
    });else if (req.project.owner != req.email) {
      if (req.project.editors.includes(req.email)) {
        if (notAuthorisedForNonOwner.includes(req.task.status)) return res.json({
          success: false,
          error: req.email + " not authorised to remove task at this stage"
        });else next();
      } else {
        res.json({
          success: false,
          error: req.email + " not authorised to perform this operation"
        });
      }
    }
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.isUserAuthorisedToRemoveTask = isUserAuthorisedToRemoveTask;

var removeTaskFromProject = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var updatedProject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _project["default"].updateOne({
              _id: req.body.ID
            }, {
              $pull: {
                tasks: {
                  _id: req.body.taskID
                }
              }
            });

          case 3:
            updatedProject = _context.sent;
            next();
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.json({
              success: false,
              error: _context.t0.message
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function removeTaskFromProject(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.removeTaskFromProject = removeTaskFromProject;