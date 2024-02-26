const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/getUsers': jsonHandler.getUser,
    '/bundle.js': htmlHandler.getBundle,
    '/success': jsonHandler.success,
    '/badRequest': jsonHandler.badRequest,
    '/notReal': jsonHandler.notFound,
    '/favicon.ico': htmlHandler.getFavicon,
  },
  HEAD: {
    '/getUsers': jsonHandler.getUser,
    '/notReal': jsonHandler.notFound,
  },
  notFound: jsonHandler.notFound,
};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    handler(request, response, bodyParams);
  });
};

// handle POST requests
const handlePost = (request, response, parsedUrl) => {
  // If they go to /addUser
  if (parsedUrl.pathname === '/addUser') {
    // Call our below parseBody handler, and in turn pass in the
    // jsonHandler.addUser function as the handler callback function.
    parseBody(request, response, jsonHandler.addUser);
  }
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);

  if (request.method === 'GET') {
    console.log(parsedUrl.pathname);
    urlStruct.GET[parsedUrl.pathname](request, response, params);
  } else if (request.method === 'HEAD') {
    // HEAD method
    urlStruct.HEAD[parsedUrl.pathname](request, response, params);
  } else if (request.method === 'POST') {
    // POST method
    handlePost(request, response, parsedUrl);
  } else {
    urlStruct.notFound;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on ${port}`);
});