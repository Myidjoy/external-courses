function getMaxValue(array) {
  array.sort((a, b) => a - b);
  let newArray = array.filter((item) => item > 0);
  newArray = newArray[newArray.length - 1];

  return newArray;
}

module.exports = getMaxValue;
