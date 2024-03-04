const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

// Define the port to listen on
const port = process.env.PORT || process.env.NODE_PORT || 4000;

// Define the URL structure with corresponding handlers
const urlStruct = {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/bundle.js': htmlHandler.getBundle,
    '/success': jsonHandler.success,
    '/badRequest': jsonHandler.badRequest,
    '/favicon.ico': htmlHandler.getFavicon,
    '/images/awkward-women.jpg': htmlHandler.getAwkImg,
    '/submit': jsonHandler.addIncedent,
    '/getIncidents': jsonHandler.getIncidents,
    '/notReal': jsonHandler.notFound,
    '/feed': htmlHandler.getFeedPage,
    notFound: jsonHandler.notFound,
};

// Function to parse the request body for POST requests
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
    let bodyParams;
    try {
      bodyParams = JSON.parse(bodyString);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      response.statusCode = 400;
      return response.end();
    }
    handler(request, response, bodyParams);
  });
};

// Function to handle POST requests
const handlePost = (request, response, parsedUrl) => {
  console.log(parsedUrl.pathname);

  parseBody(request, response, urlStruct[parsedUrl.pathname]);
};

// Request handler function
const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);

  if (request.method === 'POST') {
    handlePost(request, response, parsedUrl);
  }
  else if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response);
  }
};

// Create an HTTP server and listen on the defined port
http.createServer(onRequest).listen(port);
