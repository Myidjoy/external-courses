function showTypeElement(elem) {
  if (typeof elem === 'number' && isNaN(elem)) {
    return undefined;
  }
  if (typeof (elem) === 'number' || typeof (elem) === 'string') {
    return typeof (elem);
  }
  if (!(typeof (elem) === 'number' || typeof (elem) === 'string')) {
    return undefined;
  }

  return undefined;
}

module.exports = showTypeElement;
