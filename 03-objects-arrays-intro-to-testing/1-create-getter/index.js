/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathParts = path.split('.');

  const searchFunction = function(obj) {
    while (pathParts.length > 1 && obj[pathParts[0]]) {
      return searchFunction(obj[pathParts.shift()]);
    }
  
    return obj[pathParts[0]];
  };
  
  return searchFunction;
}
