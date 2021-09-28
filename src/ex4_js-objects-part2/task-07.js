function shortString(string, length) {
  if (string.length > length) {
    return `${string.slice(0, length - 1)}…`;
  }

  return string;
}

module.exports = shortString;
