function cloneObject(theObject) {
  const cloneTheObject = (Array.isArray(theObject)) ? [] : {};
  for (const key in theObject) {        // eslint-disable-line
    if ({}.hasOwnProperty.call(theObject, key)) {
      cloneTheObject[key] = theObject[key];
    }
  }
  for (const key in cloneTheObject) {   // eslint-disable-line
    if ((typeof (cloneTheObject[key]) === 'object' || typeof (cloneTheObject[key]) === 'function') && cloneTheObject.hasOwnProperty(key)) {
      cloneTheObject[key] = cloneObject(cloneTheObject[key]);
    }
  }

  return cloneTheObject;
}

module.exports = cloneObject;
