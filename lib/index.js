'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDate = exports.validateNum = exports.validateAccount = exports.validateMoney = exports.deepClone = exports.formatDate = exports.floatDiv = exports.floatMul = exports.accSub = exports.accAdd = undefined;

var _math = require('./util/math.js');

var _assist = require('./util/assist.js');

var _validate = require('./util/validate.js');

exports.accAdd = _math.accAdd;
exports.accSub = _math.accSub;
exports.floatMul = _math.floatMul;
exports.floatDiv = _math.floatDiv;
exports.formatDate = _assist.formatDate;
exports.deepClone = _assist.deepClone;
exports.validateMoney = _validate.validateMoney;
exports.validateAccount = _validate.validateAccount;
exports.validateNum = _validate.validateNum;
exports.validateDate = _validate.validateDate;


var util = {
  accAdd: _math.accAdd,
  accSub: _math.accSub,
  floatMul: _math.floatMul,
  floatDiv: _math.floatDiv,
  formatDate: _assist.formatDate,
  deepClone: _assist.deepClone,
  validateMoney: _validate.validateMoney,
  validateAccount: _validate.validateAccount,
  validateNum: _validate.validateNum,
  validateDate: _validate.validateDate
};

exports.default = util;