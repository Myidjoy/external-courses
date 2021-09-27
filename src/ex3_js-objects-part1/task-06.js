function cloneObject(theObject) {
  let cloneTheObject = null;

  if (Array.isArray(theObject)) cloneTheObject = [];
  else cloneTheObject = {};

  for (const key in theObject) {        // eslint-disable-line

    if (theObject.hasOwnProperty(key)) {
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
