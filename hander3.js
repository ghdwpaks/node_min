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