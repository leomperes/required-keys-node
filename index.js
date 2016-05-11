/**
 * Created by Leo M. <leomperes@belanton.com> on 4/22/16.
 */

// var request = {};
// var keys = {};
//
//
// function check() {
//
//   return '';
// }

/**
 * 
 * @param req
 * @param props
 * @returns {*}
 */
function check(req, props) {

  var result;

  if (props) {
    result = new Error('The "' + req + '" key is missing from request ' + req, 500);
  } else {
    result = new Error('The "' + req + '" key is missing from request ' + req, 400);
  }

  return result;

}

module.exports = {

  // // Properties:
  // request: request,
  // keys: keys,

  // Functions:
  check: check

};