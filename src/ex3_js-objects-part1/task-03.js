function checkProperty(property, object) {
  return Object.keys(object).some((item) => item === property);
}

module.exports = checkProperty;
