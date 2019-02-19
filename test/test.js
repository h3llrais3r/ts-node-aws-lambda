const lambdaLocal = require('lambda-local');
const path = require('path');

var jsonPayload = {
  'key': 1,
  'another_key': "Some text"
}

// Define tests

const testPromise = () => {
  lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: './dist/handler.js',
    lambdaHandler: 'promiseHandler',
    timeoutMs: 3000
  }).then(function (done) {
    console.log('Promise done: ' + done);
  }).catch(function (err) {
    console.log('Promise error' + err);
  });
};

const testCallback = () => {
  lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: './dist/handler.js',
    lambdaHandler: 'callbackHandler',
    timeoutMs: 3000,
    callback: function (err, data) {
      if (err) {
        console.log('Callback error: ' + err);
      } else {
        console.log('Callback done: ' + data);
      }
    }
  });
};

// Run tests
const runTests = async () => {
  console.log('-------------')
  console.log('Test Promise');
  console.log('-------------')
  await testPromise();
  console.log('-------------')
  console.log('Test callback');
  console.log('-------------')
  await testCallback();
};

runTests();
