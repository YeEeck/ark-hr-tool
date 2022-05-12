function combine(data, selectNum, lastVal, result = []) {
  if (lastVal.length === selectNum || !data.length) {
    lastVal.length === selectNum && result.push(lastVal);
    return;
  }

  let newData = [].concat(data);
  let item = newData.shift();
  combine(newData, selectNum, lastVal.concat(item), result); // 选
  combine(newData, selectNum, lastVal, result); // 不选
  return result;
}
console.log(combine(["术师干员", "近卫干员", "支援", "防护"], 3, [])); // [ '12', '13', '23' ]
