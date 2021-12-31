import { accAdd, accSub, floatMul, floatDiv } from './util/math.js';
import { formatDate, deepClone } from './util/assist.js';
import { validateMoney, validateAccount, validateNum, validateDate } from './util/validate.js';
import { formatCommas } from './util/formatter.js';

export {
  accAdd,
  accSub,
  floatMul,
  floatDiv,
  formatDate,
  deepClone,
  validateMoney,
  validateAccount,
  validateNum,
  validateDate,
  formatCommas
};

const util = {
  accAdd,
  accSub,
  floatMul,
  floatDiv,
  formatDate,
  deepClone,
  validateMoney,
  validateAccount,
  validateNum,
  validateDate,
  formatCommas
};

export default util;
