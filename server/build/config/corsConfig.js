"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsConfig = void 0;
var corsConfig = {
  "origin": "*",
  "allowedHeaders": ["Content-Type", "Authorization"],
  "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
  "credentials": true
};
exports.corsConfig = corsConfig;