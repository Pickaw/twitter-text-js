"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var cyrillicLettersAndMarks = /\u0400-\u04FF/;
var _default = cyrillicLettersAndMarks;
exports["default"] = _default;
module.exports = exports.default;