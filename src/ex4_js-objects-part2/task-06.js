function toUpperCaseEveryNewWords(string) {
  return string.trim().split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
}

module.exports = toUpperCaseEveryNewWords;
