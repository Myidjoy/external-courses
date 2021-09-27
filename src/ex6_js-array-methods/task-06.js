function reduceArray(array, callback, initialValue) {
  let previousValue = initialValue || 0;

  for (let i = 0; i < array.length; i += 1) {
    const currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduceArray;
