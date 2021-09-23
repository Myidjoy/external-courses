function showTypeElement(elem) {
  if (typeof elem === 'number' && isNaN(elem)) { return undefined; }
  if (typeof (elem) === 'number' || typeof (elem) === 'string') { return typeof (elem); }
  if (!(typeof (elem) === 'number' || typeof (elem) === 'string')) { return undefined; }
  return undefined;
}
// elem !== elem
module.exports = showTypeElement;
