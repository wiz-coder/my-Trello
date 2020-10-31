"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUserEditor = exports.doesProjectExists = void 0;

var doesProjectExists = function doesProjectExists(req, res, next) {
  try {
    var specificProject = req.user.projects.filter(function (project) {
      console.log(project, '\n', project._id, req.body.ID, project._id == req.body.ID);
      if (project._id == req.body.ID) return project;
    });
    console.log(specificProject);
    if (specificProject.length < 1) return res.json({
      success: false,
      error: "Project doesn't exist or editor is not part of the project team"
    });
    req.project = specificProject[0];
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.doesProjectExists = doesProjectExists;

var isUserEditor = function isUserEditor(req, res, next) {
  try {
    console.log(req.project);
    var isEditor = req.project.editors.filter(function (editor) {
      return editor == req.user.email;
    });
    if (isEditor.length < 1) return res.json({
      success: false,
      error: "User is not authorised to perform this operation"
    });
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.isUserEditor = isUserEditor;