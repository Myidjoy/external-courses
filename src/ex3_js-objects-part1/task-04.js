function checkProperty(property, object) {
  const result = Object.keys(object).some((item) => item === property);

  if (!result) object[property] = 'new'; // eslint-disable-line

  return object;
}

module.exports = checkProperty;
