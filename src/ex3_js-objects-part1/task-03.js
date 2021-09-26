function checkProperty(property, object) {
  const keys = Object.keys(object);

  return keys.some((item) => item.toLocaleLowerCase() === property.toLocaleLowerCase());
}

module.exports = checkProperty;
