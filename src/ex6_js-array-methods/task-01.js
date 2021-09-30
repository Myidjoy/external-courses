function sliceMethod(array, begin, end) {
  const sliceArray = [];

  if (begin < 0 && end < 0) {
    if (end * -1 > array.length) {
      // eslint-disable-next-line
      end = 0;

      for (let i = end; i <= (array.length + begin); i += 1) {
        sliceArray.push(array[i]);
      }
    }

    for (let i = (array.length + begin); i < (array.length + end); i += 1) {
      sliceArray.push(array[i]);
    }

    return sliceArray;
  }

  if (begin < 0 && end >= 0) {
    if (begin <= array.length * -1) {
      // eslint-disable-next-line
      begin = 0;
    }

    for (let i = begin; i < end; i += 1) {
      sliceArray.push(array[i]);
    }

    return sliceArray;
  }

  if (begin < 0) {
    if (begin <= array.length * -1) {
      return array;
    }

    for (let i = 0; i < (array.length + begin); i += 1) {
      sliceArray.push(array[i]);
    }

    return sliceArray;
  }

  if (begin >= 0 && end >= 0) {
    if (end > array.length) {
      for (let i = begin; i < array.length; i += 1) {
        sliceArray.push(array[i]);
      }

      return sliceArray;
    }

    for (let i = begin; i < end; i += 1) {
      sliceArray.push(array[i]);
    }

    return sliceArray;
  }

  if (begin >= 0) {
    for (let i = begin; i < array.length; i += 1) {
      sliceArray.push(array[i]);
    }
  }

  if (begin === undefined && end === undefined) {
    return array;
  }

  return sliceArray;
}

module.exports = sliceMethod;
