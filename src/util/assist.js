const formatDate = (date, fmt = 'yyyy-MM-dd') => {
  if (!date) {
    return '';
  }
  let result = fmt;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(result)) {
    result = result.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(result)) {
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });
  return result;
};

const deepClone = (data) => {
  let result;
  const type = Object.prototype.toString.call(data);
  if (type === '[object Object]') {
    result = {};
    Object.keys(data).forEach((key) => {
      result[key] = deepClone(data[key]);
    });
  } else if (type === '[object Array]') {
    result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(deepClone(data[i]));
    }
  } else {
    result = data;
  }
  return result;
};

export {
  formatDate,
  deepClone
};
