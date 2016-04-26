/**
 * Created by Leo M. <leomperes@belanton.com> on 4/22/16.
 */

// Example of HTTP Request data where required keys will be searched.
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

// Required keys will be searched in HTTP Request data above.
var requiredKeys = { data: ['id', 'comments'] }; //params: ['tenantId'],

// function iterate(httpRequestBody, stack) {
//   // Loop on all object var properties.
//   for (var property in httpRequestBody) {
//     // If object has the properties.
//     if (httpRequestBody.hasOwnProperty(property)) {
//       //
//       if (typeof httpRequestBody[property] == 'object') {
//         iterate(httpRequestBody[property], stack + '.' + property);
//       } else {
//         console.log(stack);
//         console.log(stack + '.' + property);
//         console.log(property + ' - ' + httpRequestBody[property]);
//       }
//     }
//   }
// }
//
// iterate(requiredKeys, 'test');

console.log(httpRequestBody);
console.log(requiredKeys);