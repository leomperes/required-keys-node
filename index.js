/**
 * Created by Leo M. <leomperes@belanton.com> on 4/22/16.
 */

var obj = { params: ['tenantId'], body: ['portal', 'name'] };

function iterate(obj, stack) {
  // Loop on all object var properties.
  for (var property in obj) {
    // If object has the properties.
    if (obj.hasOwnProperty(property)) {
      //
      if (typeof obj[property] == 'object') {
        iterate(obj[property], stack + '.' + property);
      } else {
        console.log(property + ' - ' + obj[property]);
        // $('#output').append($('<div/>').text(stack + '.' + property))
      }
    }
  }
}

iterate(obj, '');