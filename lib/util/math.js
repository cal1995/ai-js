'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 加
var accAdd = function accAdd(arg1, arg2) {
  var r1 = void 0;
  var r2 = void 0;
  var m = 0;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
};

// 减
var accSub = function accSub(arg1, arg2) {
  var r1 = void 0;
  var r2 = void 0;
  var m = 0;
  var n = 0;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
};

//  乘
var floatMul = function floatMul(arg1, arg2) {
  if (!arg1) {
    return 0;
  }
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {
    console.error('floatMul error');
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
    console.error('floatMul error');
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};

// 除
var floatDiv = function floatDiv(arg1, arg2) {
  if (!arg1) {
    return 0;
  }
  var t1 = 0;
  var t2 = 0;
  var r1 = 0;
  var r2 = 0;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    console.error('floatDiv error');
  }
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    console.error('floatDiv error');
  }
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return r1 / r2 * Math.pow(10, t2 - t1);
};

exports.accAdd = accAdd;
exports.accSub = accSub;
exports.floatMul = floatMul;
exports.floatDiv = floatDiv;