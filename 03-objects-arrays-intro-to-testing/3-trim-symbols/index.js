/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof size === 'undefined') {
    return string;
  }

  if (!size) {
    return '';
  }

  let stringSplitted = string.split('');
  let counter = 0;
  let repeatingSymbol = stringSplitted[0];
  
  for (let i = 1; i < stringSplitted.length; i++) {
    if (stringSplitted[i] === repeatingSymbol) {
      counter++;
  
      if (counter === size) {
        stringSplitted.splice(i, 1);
        return trimSymbols(stringSplitted.join(''), size);
      }
    } else {
      repeatingSymbol = stringSplitted[i];
      counter = 0;
    }
  }
  
  return stringSplitted.join('');
}
