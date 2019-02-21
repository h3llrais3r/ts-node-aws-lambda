import { Callback, Context, Handler } from 'aws-lambda';

export const promiseHandler: Handler = (event: any, context: Context): Promise<boolean> => {
  console.log('Event: ' + JSON.stringify(event));
  console.log('Context: ' + JSON.stringify(context));
  return Promise.resolve(true);
};

export const callbackHandler: Handler = (event: any, context: Context, callback: Callback): void => {
  console.log('Event: ' + JSON.stringify(event));
  console.log('Context: ' + JSON.stringify(context));
  callback(null, true);
};
