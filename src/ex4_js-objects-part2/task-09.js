function addStringToString(string, subString, value) {
  const beforeValue = string.trim().split(' ').slice(0, +value + 1);
  const afterValue = string.trim().split(' ').slice(value + 1);
  beforeValue.push(subString);
  return beforeValue.concat(afterValue).join(' ');
}
module.exports = addStringToString;
