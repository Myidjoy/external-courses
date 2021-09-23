function checkProperty(property, object) {
  const newObject = object;
  const keys = Object.keys(object);
  const result = keys.some((item) => item.toLocaleLowerCase() === property.toLocaleLowerCase());
  if (!result) object[property] = 'new'; // eslint-disable-line
  return newObject;
}
module.exports = checkProperty;
