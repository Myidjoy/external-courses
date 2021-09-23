function evenOrOdd(arr) {
  let even = 0;
  let unEven = 0;
  let zero = 0;
  arr.forEach((item) => {
    if (item === 0) {
      zero += 1;
    } else if (typeof (item) === 'string' || typeof (item) === 'number') {
      if (item % 2 === 0) { even += 1; }
      if (item % 2 === 1) { unEven += 1; }
    }
  });
  return [even, unEven, zero];
}
module.exports = evenOrOdd;
