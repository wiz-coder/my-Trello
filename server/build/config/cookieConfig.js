"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieConfig = void 0;
var cookieConfig = {
  "httpOnly": true,
  "maxAge": new Date(Date.now() + 24 * 3600 * 1000)
};
exports.cookieConfig = cookieConfig;