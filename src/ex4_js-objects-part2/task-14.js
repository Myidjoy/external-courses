function getRandom(min, max) {
  let result = Math.round(Math.random() * max);
  if (result < min) result += min;
  return result;
}
module.exports = getRandom;
