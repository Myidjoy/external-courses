function similarElements(array) {
  return array.every((item) => item === array[0]);
}

module.exports = similarElements;
