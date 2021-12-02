// 千分位添加逗号
const formatCommas = val => val.replace(/\B(?=(\d{3})+\b)/g, ',');

export {
  formatCommas
};
