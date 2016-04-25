/**
 * Created by Leo M. <leomperes@belanton.com> on 4/22/16.
 */

// Var propertiesExist = require('./lib/PropertiesExist');
var obj = { body: ['portal', 'name'] };

function iterate(obj, stack) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == 'object') {
        iterate(obj[property], stack + '.' + property);
      } else {
        console.log(property + ' - ' + obj[property]);
        $('#output').append($('<div/>').text(stack + '.' + property))
      }
    }
  }
}

iterate(obj, '');