/**
 *
 * @type {{check: module.exports.check}}
 * @version 0.0.2
 * @author Leo M. <leomperes@belanton.com>
 * @since 4/22/16
 */
module.exports = {

  /**
   * Check if <code>keys</code> are in <code>request</code>.
   *
   * @param {Object} request HTTP request to check its required keys.
   * @param {Object} keys Keys to be check on <code>request</code> param.
   * @param {string[]} keys.params Keys to be check on <code>request</code> param.
   * @param {string[]} keys.body Keys to be check on <code>request</code> param.
   * @example <caption>Example usage of keys.</caption>
   * {
   *    params: ['tenantId'],
   *    body: ['portal','name']
   * }
   * @returns {*}
   * @since 0.0.1
   */
  check: function(request, keys) {
    /** @type {*} */
    var result;

    if (keys) {
      result = new Error('The "' + req + '" key is missing from request ' + req, 500);
    } else {
      result = new Error('The "' + req + '" key is missing from request ' + req, 400);
    }

    return result;
  }

};