/**
 * Created by Leo M. <leomperes@belanton.com> on 5/10/16.
 */

/**
 * Example of HTTP Request data where required keys will be searched.
 * @type {{data: *[]}}
 */
var httpRequestBody = {
  "data": [
    {
      "id": 1,
      "title": "My first Post",
      "content": "Hello world!",
      "comments": [
        {
          "id": 1001,
          "description": "Body Goodies",
          "comments": [
            {
              "id": 1101,
              "description": "Test third level...",
              "comments": [
                {
                  "id": 1201,
                  "description": "Test fourth level...",
                  "comments": []
                }
              ]
            },
            {
              "id": 1102,
              "description": "...",
              "comments": []
            }
          ]
        },
        {
          "id": 1002,
          "description": "Healthy",
          "comments": []
        }
      ]
    },
    {
      "id": 2,
      "title": "I am here again!",
      "content": "Once upon a time...",
      "comments": [
        {
          "id": 1003,
          "description": "Body Goodies",
          "comments": []
        },
        {
          "id": 1004,
          "description": "Healthy",
          "comments": [
            {
              "id": 1401,
              "description": "Test third level...",
              "comments": []
            }
          ]
        }
      ]
    }
  ]
};

/**
 * Required keys will be searched in HTTP Request data above.
 * @type {string[]}
 * @example { params: ['tenantId'], body: ['portal','name'] }
 */
var requiredKeys = ['title', 'foo'];

/**
 * Function to iterate through object keys checking those required.
 * @param dataKeys
 * @param requiredDataKeys
 */
function iterate(dataKeys, requiredDataKeys) {

  var result = null;

  // Loop on all object var properties.
  for (var dataKey in dataKeys) {

    // If object has the properties.
    if (dataKeys.hasOwnProperty(dataKey)) {

      if (typeof dataKeys[dataKey] == 'object') {
        iterate(dataKeys[dataKey], requiredDataKeys + '.' + dataKey);
      } else {
        console.log(requiredDataKeys);
        console.log(requiredDataKeys + '.' + dataKey);
        console.log(dataKey + ' - ' + dataKeys[dataKey]);

        // o = new Object();
        // o.prop = 'exists';
        // console.log(typeof(o.prop));
      }
      // console.log('Success');
    } else {
      console.log('Error');
      // Create an error.
      result = new Error('The "' + dataKey + '" key is missing from request ' + dataKeys, 400);
      // Break..
      return false;
    }

    // Maybe break outer loop.
    if (null !== result) {
      return false;
    }

  }

  // Everything looks good.
  return result;

  // TODO: Remove unnecessary code.
  // for (var requiredDataKey in requiredDataKeys) {
  //   // if (typeof requiredDataKeys[requiredDataKey] == 'object') {
  //   //   objectHasOwnProperty(requiredDataKeys[requiredDataKey], requiredDataKey);
  //   // }
  //   // else {
  //   //   objectHasOwnProperty(requiredDataKeys, requiredDataKey);
  //   // }
  //   if (!dataKeys.hasOwnProperty(requiredDataKey)) {
  //     console.log('Error on: ' + typeof requiredDataKeys[requiredDataKey] + ' ' + requiredDataKey);
  //   }
  // }
  //
  // for (var dataKey in dataKeys) {
  //   if (typeof dataKeys[dataKey] == 'object') {
  //     iterate(dataKeys[dataKey], requiredDataKeys)
  //   }
  // }

}

// TODO: Remove unnecessary code.
// function objectHasOwnProperty(obj, prop) {
//   if (!obj.hasOwnProperty(prop)) {
//     console.log(obj + 'doesn\'t have ' + prop + ' property!');
//   }
// }

iterate(httpRequestBody, requiredKeys);

// TODO: Remove unnecessary code.
// console.log(httpRequestBody);
// console.log(requiredKeys);

// var buz = {
//   fog: 'stack',
//   foo: 'bar',
//   tests: [
//     {
//       john: 'doe'
//     }
//   ]
// };

// var keys = ['fog', 'foo']; //, 'tests'

// for (var name in buz) {
//   // console.log(name);
//   if (keys.indexOf(name) > -1) {
//     console.log('this is fog (' + name + ') for sure. Value: ' + buz[name] + '. Type: ' + typeof(buz[name]));
//     // typeof dataKeys[dataKey] == 'object'
//     // console.log(buz.hasOwnProperty(name));
//   } else {
//     console.log('Error:' + name); // TODO: toString or something else
//   }
// }

// console.log(Object.getOwnPropertyNames(buz));