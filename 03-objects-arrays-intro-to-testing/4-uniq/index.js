/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const resultArr = [];
  const uniqValues = new Set(arr);
    
  for (let value of uniqValues) {
    resultArr.push(value);
  }

  return resultArr;
}
