"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doesTaskExist = exports.isUserAuthorisedToModify = void 0;

var isUserAuthorisedToModify = function isUserAuthorisedToModify(req, res, next) {
  try {
    var isOwner = req.project.owner == req.user.email;
    if (isOwner) next();else {
      switch (req.body.status) {
        case "UNDER-REVIEW":
        case "MERGED":
        case "REDO":
          return res.json({
            success: false,
            error: "User is not authorised to perform this operation"
          });

        default:
          next();
      }
    }
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.isUserAuthorisedToModify = isUserAuthorisedToModify;

var doesTaskExist = function doesTaskExist(req, res, next) {
  try {
    var specificTask = req.project.tasks.filter(function (task) {
      return task._id == req.body.taskID;
    });
    if (specificTask.length < 1) return res.json({
      success: false,
      error: "Task doesn't exist"
    });
    req.task = specificTask[0];
    next();
  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
};

exports.doesTaskExist = doesTaskExist;