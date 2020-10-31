"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editorOrViewerNotExists = exports.editorOrViewerExists = exports.isModifierOwner = exports.userExists = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _project = _interopRequireDefault(require("../models/project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userExists = /*#__PURE__*/function () {
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
              error: "User doesn't exist in database"
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

  return function userExists(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.userExists = userExists;

var isModifierOwner = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var specificProject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _project["default"].findById(req.body.projectID);

          case 3:
            specificProject = _context2.sent;

            if (!(specificProject.owner !== req.email)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.json({
              success: false,
              error: "Only owner is authorized to do this modification"
            }));

          case 6:
            req.project = specificProject;
            next();
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.json({
              success: false,
              error: _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function isModifierOwner(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModifierOwner = isModifierOwner;

var editorOrViewerExists = function editorOrViewerExists(req, res, next) {
  try {
    switch (req.body.role) {
      case "editor":
        var editorExists = req.project.editors.filter(function (editor) {
          return editor === req.body.email;
        });
        if (editorExists) return res.json({
          success: false,
          error: req.body.email + " already in the editors' list"
        });
        next();

      case "viewer":
        var viewerExists = req.project.viewers.filter(function (viewer) {
          return viewer === req.body.email;
        });
        if (viewerExists) return res.json({
          success: false,
          error: req.body.email + " already in the viewers' list"
        });
        next();
    }
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.editorOrViewerExists = editorOrViewerExists;

var editorOrViewerNotExists = function editorOrViewerNotExists(req, res, next) {
  try {
    switch (req.body.role) {
      case "editor":
        var editorExists = req.project.editors.filter(function (editor) {
          return editor === req.body.email;
        });
        if (!editorExists) return res.json({
          success: false,
          error: req.body.email + " doesn't in the editors' list"
        });
        next();

      case "viewer":
        var viewerExists = req.project.viewers.filter(function (viewer) {
          return viewer === req.body.email;
        });
        if (viewerExists) return res.json({
          success: false,
          error: req.body.email + " doesn't in the viewers' list"
        });
        next();
    }
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.editorOrViewerNotExists = editorOrViewerNotExists;