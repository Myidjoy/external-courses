function elementsCount(string) {
  const countElem = {};
  const arr = string.trim().toLowerCase().split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (!(arr[i] in countElem)) {
      countElem[arr[i]] = 1;
    } else {
      countElem[arr[i]] += 1;
    }
  }
  for (const props in countElem) { // eslint-disable-line
    console.log(`${props} is ${countElem[props]}`);
  }
}
module.exports = elementsCount;
