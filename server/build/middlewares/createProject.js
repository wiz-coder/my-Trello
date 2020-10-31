"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTitleUnique = void 0;

var isTitleUnique = function isTitleUnique(req, res, next) {
  try {
    if (!req.user.projects) next();
    var titleExist = req.user.projects.filter(function (project) {
      return project.title === req.body.title;
    });
    if (titleExist.length > 0) return res.json({
      success: false,
      error: "Project with given Title exists"
    });
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.isTitleUnique = isTitleUnique;