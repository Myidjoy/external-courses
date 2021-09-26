function keyAndValue(object) {
  for (const key of Object.entries(object)) { // eslint-disable-line
    console.log(...key);
  }
}

module.exports = keyAndValue;
