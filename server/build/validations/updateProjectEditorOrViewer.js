"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var editorOrViewerSchema = _joi["default"].object({
  email: _joi["default"].string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'org', 'in']
    }
  }).required(),
  role: _joi["default"].string().required(),
  projectID: _joi["default"].string().required()
});

var editorOrViewerValidation = function editorOrViewerValidation(req, res, next) {
  var validation = editorOrViewerSchema.validate(req.body);
  if (validation.error) return res.json({
    success: false,
    error: validation.error.message
  });
  next();
};

var _default = editorOrViewerValidation;
exports["default"] = _default;