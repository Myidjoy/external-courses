function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (callback(item, i, array)) {
      newArray[newArray.length] = item;
    }
  }

  return newArray;
}

module.exports = filter;
