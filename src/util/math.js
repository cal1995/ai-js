// 加
const accAdd = (arg1, arg2) => {
  let r1;
  let r2;
  let m = 0;
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
  m = 10 ** Math.max(r1, r2);
  return (arg1 * m + arg2 * m) / m;
};

// 减
const accSub = (arg1, arg2) => {
  let r1;
  let r2;
  let m = 0;
  let n = 0;
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
  m = 10 ** Math.max(r1, r2);
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
};

//  乘
const floatMul = (arg1, arg2) => {
  if (!arg1) {
    return 0;
  }
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
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
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / 10 ** m;
};

// 除
const floatDiv = (arg1, arg2) => {
  if (!arg1) {
    return 0;
  }
  let t1 = 0;
  let t2 = 0;
  let r1 = 0;
  let r2 = 0;
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
  return (r1 / r2) * 10 ** (t2 - t1);
};

export {
  accAdd,
  accSub,
  floatMul,
  floatDiv
};
