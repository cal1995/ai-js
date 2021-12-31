'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 千分位添加逗号
var formatCommas = function formatCommas(val) {
  return val.replace(/\B(?=(\d{3})+\b)/g, ',');
};

exports.formatCommas = formatCommas;