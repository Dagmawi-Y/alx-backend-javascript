/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */
function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
