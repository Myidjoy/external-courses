function reduceArray(array, callback, initialValue) {
  let previousValue = initialValue || array[0];
  let counter = 0;

  // eslint-disable-next-line
  initialValue ? counter = 0 : counter = 1;

  for (let i = counter; i < array.length; i += 1) {
    const currentItem = array[i];

    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduceArray;
