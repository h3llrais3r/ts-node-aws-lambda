const lambdaLocal = require('lambda-local');
const path = require('path');

var jsonPayload = {
  'key': 1,
  'another_key': "Some text"
}

// Define tests

const testPromise = async () => {
  try {
    const data = await lambdaLocal.execute({
      event: jsonPayload,
      lambdaPath: './dist/handler.js',
      lambdaHandler: 'promiseHandler',
      timeoutMs: 3000
    });
    console.log('Promise done: ' + data);
  } catch (err) {
    console.log('Promise error: ' + err);
  };
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
  await testPromise();
  testCallback();
};

runTests();
