function sliceMethod(array, begin, end) {
  const sliceArray = [];
  if (begin < 0 && end < 0) {
    for (let i = (array.length + begin); i < (array.length + end); i += 1) {
      sliceArray[sliceArray.length] = array[i];
    }
    return sliceArray;
  }
  if (begin <= array.length * -1 && end >= 0) {
    let i = 0;
    while (i !== end) {
      sliceArray.push(array[i]);
      i += 1;
    }
    return sliceArray;
  }
  if (begin < 0) {
    if (begin <= array.length * -1) return array;
    for (let i = (array.length + begin); i >= 0; i -= 1) {
      sliceArray[sliceArray.length] = array[i];
    }
    return sliceArray;
  }
  if (begin >= 0 && end >= 0) {
    if (end > array.length) {
      for (let i = begin; i < array.length; i += 1) {
        sliceArray[sliceArray.length] = array[i];
      }
      return sliceArray;
    }
    for (let i = begin; i < end; i += 1) {
      sliceArray[sliceArray.length] = array[i];
    }
    return sliceArray;
  }
  if (begin >= 0) {
    for (let i = begin; i < array.length; i += 1) {
      sliceArray[sliceArray.length] = array[i];
    }
    return sliceArray;
  }
  if (begin === undefined && end === undefined) {
    return array;
  }

  return sliceArray;
}

module.exports = sliceMethod;
