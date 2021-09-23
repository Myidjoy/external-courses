function toLowerCamelCase(string) {
  const camelCase = string.trim().split(' ').map((item) => item.toLowerCase()).map((item) => item[0].toUpperCase() + item.slice(1))
    .join('');
  return camelCase[0].toLowerCase() + camelCase.slice(1);
}
module.exports = toLowerCamelCase;
