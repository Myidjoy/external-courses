function similarElements(array) {
  const result = array.every((item) => item === array[0]);
  return result;
}
module.exports = similarElements;
