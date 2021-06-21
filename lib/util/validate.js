'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 金额校验
var validateMoney = function validateMoney(val) {
  var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  if (!reg.test(val)) {
    return false;
  }
  return true;
};

// 账号校验,兼容单个或多个账号
var validateAccount = function validateAccount(account, limit) {
  if (account !== '' && account !== null) {
    var accounts = account.split('\n');
    // 账号长度限制
    var accountLen = limit || 50;
    // 账号中文限制
    // const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    var reg = /[\u4e00-\u9fff]+/g;
    for (var i = 0; i < accounts.length; i++) {
      if (accounts[i].length > accountLen || reg.test(account)) {
        return false;
      }
    }
    return true;
  }
  return true;
};

// 纯数字
var validateNum = function validateNum(val) {
  var patrn = /^[0-9]*$/;
  if (!patrn.test(val) || val === '') {
    return false;
  }
  return true;
};

// 时间校验
var validateDate = function validateDate(val) {
  var reg = /^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}\s+([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/;
  if (!reg.test(val)) {
    return false;
  }
  return true;
};

exports.validateMoney = validateMoney;
exports.validateAccount = validateAccount;
exports.validateNum = validateNum;
exports.validateDate = validateDate;