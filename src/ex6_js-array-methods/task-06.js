function reduceArray(array, callback, initialValue) {
  if (initialValue !== undefined) {
    let previousValue = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      const currentItem = array[i];
      previousValue = callback(previousValue, currentItem, i, array);
    }
    return previousValue;
  }
  let previousValue = array[0];
  for (let i = 1; i < array.length; i += 1) {
    const currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduceArray;
