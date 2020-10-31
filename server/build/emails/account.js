"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.verifyUser = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

var verifyUser = function verifyUser(req, res, next) {
  var msg = {
    to: "".concat(req.body.email),
    // Change to your recipient
    from: 'uppalapraveen0707@gmail.com',
    // Change to your verified sender
    subject: 'Verifying the User',
    text: "http://localhost:3000/verifyUser?user=".concat(req.token),
    html: "<a href='http://localhost:3000/verifyUser?user=".concat(req.token, "' target=\"_blank\">Click on the link to verify your account</a>")
  };

  _mail["default"].send(msg).then(function () {
    console.log('Email sent');
    res.json({
      success: true,
      message: "Please go to your mail and click the link to verify"
    });
  })["catch"](function (error) {
    console.error(error);
  });
};

exports.verifyUser = verifyUser;

var resetPassword = function resetPassword(req, res, next) {
  var msg = {
    to: "".concat(req.body.email),
    // Change to your recipient
    from: 'uppalapraveen0707@gmail.com',
    // Change to your verified sender
    subject: 'reset your password',
    text: "http://localhost:3000/resetPassword?user=".concat(req.token),
    html: "<a href='http://localhost:3000/resetPassword?user=".concat(req.token, "' target=\"_blank\">Click on the link to reset your password</a>")
  };

  _mail["default"].send(msg).then(function () {
    console.log('Email sent');
    res.json({
      success: true,
      message: "Please go to your mail and click the reset password link"
    });
  })["catch"](function (error) {
    console.error(error);
  });
};

exports.resetPassword = resetPassword;