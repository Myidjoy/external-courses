function cloneObject(theObject) {
  let cloneTheObject = null;

  if (Array.isArray(theObject)) {
    cloneTheObject = [];
  } else cloneTheObject = {};

  // eslint-disable-next-line
  for (const key in theObject) {        
    if (theObject.hasOwnProperty(key)) {
      cloneTheObject[key] = theObject[key];
    }
  }

  // eslint-disable-next-line
  for (const key in cloneTheObject) {
    const isTypeObject = typeof (cloneTheObject[key]) === 'object' || typeof (cloneTheObject[key]) === 'function';
    const isOwnProperty = cloneTheObject.hasOwnProperty(key);

    if (isTypeObject && isOwnProperty) {
      cloneTheObject[key] = cloneObject(cloneTheObject[key]);
    }
  }

  return cloneTheObject;
}

module.exports = cloneObject;
