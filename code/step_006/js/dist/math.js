"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//math.js
var box = {};

var fnSum = function fnSum(a, b) {
  return a + b;
};

var fnMulti = function fnMulti(a, b) {
  return a * b;
};

function fnDiv(a, b) {
  return a / b;
}

;
box.div = fnDiv;
box.sum = fnSum;
box.mul = fnMulti; // window.box=box;

var _default = box;
exports.default = _default;