const fs = require('fs'); // Pull in the file system module

// Read the client.html, style.css, and bundle.js files into memory on server start
const index = fs.readFileSync(`${__dirname}/../dist/client.html`);
const css = fs.readFileSync(`${__dirname}/../dist/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../dist/bundle.js`);
const favicon = fs.readFileSync(`${__dirname}/../dist/images/favicon.png`);
const awkImg = fs.readFileSync(`${__dirname}/../dist/images/awkward-women.jpg`);
const feedPage = fs.readFileSync(`${__dirname}/../dist/feedPage.html`);

// A simple helper function for serving up static files
const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

// Serve the client.html page
const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

// Serve the feedPage.html page
const getFeedPage = (request, response) => {
  serveFile(response, feedPage, 'text/html');
};

// Serve the style.css page
const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

// Serve the bundle.js file
const getBundle = (request, response) => {
  serveFile(response, bundle, 'application/javascript');
};

// Serve the favicon image
const getFavicon = (request, response) => {
  serveFile(response, favicon, 'image/x-icon');
};

// Serve the awkward-women image
const getAwkImg = (request, response) => {
    serveFile(response, awkImg, 'image/jpeg');
};

module.exports = {
  getIndex,
  getCSS,
  getBundle,
  getFavicon,
  getAwkImg,
  getFeedPage,
};
