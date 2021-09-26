function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    newArray[i] = callback(item, i, array);
  }

  return newArray;
}

module.exports = map;
