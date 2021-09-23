function theMaximumValue(array) {
  const positiveNumbers = array.sort((a, b) => a - b).filter((item) => item > 0);
  return positiveNumbers[positiveNumbers.length - 1];
}
module.exports = theMaximumValue;
