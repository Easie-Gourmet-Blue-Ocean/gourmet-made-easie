const mapKeys = require('lodash/mapKeys')
const camelCase = require('lodash/camelCase')

/**
 * convert an object's keys from snake_case to camelCase
 * API response data formatting
 */
module.exports.snakeToCamelCase = (obj) => {
  return mapKeys(obj, (value, key) => camelCase(key));
}