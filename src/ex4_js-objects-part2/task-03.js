function deleteFirstAndLastSpaces(string) {
  if (string[0] === ' ' && string[string.length - 1]) return string.slice(1, string.length - 1);
  return undefined;
}
module.exports = deleteFirstAndLastSpaces;
