function getKeyFromPrototype(key, object) {
  if (!object.hasOwnProperty(key)) {
    return object[key];
  }
  return undefined;
}

module.exports = getKeyFromPrototype;
