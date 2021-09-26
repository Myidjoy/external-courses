function checkProperty(property, object) {
  const newObject = object;
  const keys = Object.keys(newObject);
  const result = keys.some((item) => item.toLocaleLowerCase() === property.toLocaleLowerCase());
  if (!result) newObject[property] = 'new'; // eslint-disable-line

  return newObject;
}

module.exports = checkProperty;
