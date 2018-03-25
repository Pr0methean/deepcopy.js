const { detectType } = require('./detector.js');

/**
 * collection types
 */
const collectionTypeSet = new Set([
  'Arguments',
  'Array',
  'Map',
  'Object',
  'Set'
]);

/**
 * get value from collection
 *
 * @param {Array|Object|Map|Set} collection
 * @param {string|number|symbol} key
 * @param {string} [type=null]
 * @return {*}
 */
function get(collection, key, type = null) {
  const valueType = type || detectType(collection);

  switch (valueType) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      return collection[key];
    case 'Map':
    case 'Set':
      return collection.get(key);
    default:
  }
}

/**
 * check to type string is collection
 *
 * @param {string} type
 */
function isCollection(type) {
  return collectionTypeSet.has(type);
}

/**
 * set value to collection
 *
 * @param {Array|Object|Map|Set} collection
 * @param {string|number|symbol} key
 * @param {*} value
 * @param {string} [type=null]
 * @return {Array|Object|Map|Set}
 */
function set(collection, key, value, type = null) {
  const valueType = type || detectType(collection);

  switch (valueType) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      collection[key] = value;
      break;
    case 'Map':
      collection.set(key, value);
      break;
    case 'Set':
      collection.add(value);
      break;
    default:
  }

  return collection;
}

module.exports = {
  get,
  isCollection,
  set
};
