"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

require("dotenv/config");

var _corsConfig = require("./config/corsConfig");

var _indexRoute = _interopRequireDefault(require("./routes/homeRoutes/_indexRoute"));

var _indexRoute2 = _interopRequireDefault(require("./routes/userRoutes/_indexRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// cors config
// importing routes
var app = (0, _express["default"])(); // db connection

_mongoose["default"].connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function () {
  return console.log("Database Connected");
})["catch"](function (err) {
  return console.log(err);
}); //middlewares


app.use((0, _cors["default"])(_corsConfig.corsConfig));
app.use((0, _morgan["default"])("tiny"));
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json()); // redirecting to the specific routes

app.use('/app/v1/home', _indexRoute["default"]);
app.use('/app/v1/user', _indexRoute2["default"]);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("server listening to ".concat(port));
});