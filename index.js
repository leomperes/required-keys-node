/**
 * Created by Leo M. <leomperes@belanton.com> on 4/22/16.
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
 * @type {{data: string[]}}
 */
var requiredKeys = { data: ['id', 'comments'] };
//params: ['tenantId'],

/**
 *
 * @param dataKeys
 * @param requiredDataKeys
 */
function iterate(dataKeys, requiredDataKeys) {

  var result = null;

  // Loop on all object var properties.
  for (var dataKey in dataKeys) {

    // If object has the properties.
    if (dataKeys.hasOwnProperty(dataKey)) {

      //
      if (typeof dataKeys[dataKey] == 'object') {
        iterate(dataKeys[dataKey], requiredDataKeys + '.' + dataKey);
      } else {
        console.log(requiredDataKeys);
        console.log(requiredDataKeys + '.' + dataKey);
        console.log(dataKey + ' - ' + dataKeys[dataKey]);
      }
      
    } else {
      // Create an error.
      result = new Error('The "' + dataKey + '" key is missing from request ' + dataKeys, 400);
      // break;
      return false;
    }

    // Maybe break outer loop.
    if (null !== result) {
      return false;
    }

  }

  // Everything looks good.
  return result;
}

iterate(httpRequestBody, requiredKeys);

// console.log(httpRequestBody);
// console.log(requiredKeys);