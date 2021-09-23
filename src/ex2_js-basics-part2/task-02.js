function arrLength(array) {
  array.forEach((item, i) => console.log(`Elem of arr ${i + 1} is ${item}`));
  console.log(array.length);
}
module.exports = arrLength;
