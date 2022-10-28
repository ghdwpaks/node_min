'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1972.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

exports.handler = (event, context, callback) => {
  // TODO implement
  callback(null, 'Hello from Lambda');
  return event
};

module.exports.hell = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'disabled to apply codes',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.home = async (event) => {
  return {
    statusCode: 200,
    body: `
    <!doctype html>
    <html>
    <head>
      <title>HOME</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="">It's time to go HOME!!!</a></h1>
    </body>
    </html>
    `
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};