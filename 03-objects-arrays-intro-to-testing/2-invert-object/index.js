/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return; 
  }
  
  const objectKeys = Object.keys(obj);
    
  if (!objectKeys.length) {
    return obj;
  }
  
  let resultObj = {};
  
  objectKeys.forEach(key => {
    resultObj = {
      ...resultObj,
      [obj[key]]: key
    };
  });
  
  return resultObj;
}