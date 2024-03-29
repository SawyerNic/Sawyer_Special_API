/* There is no new code in this file that is unique to this demo.
   This code is directly taken from the "Status Code" example.
*/

const firebase = require('./firebase.js');

// Function to respond with JSON data
const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

// Function to respond with a header only
const respondHead = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

// Function to handle a successful response
const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response!',
  };

  respondJSON(request, response, 200, responseJSON);
};

// Function to handle a bad request
const badRequest = (request, response, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!params.valid || params.valid !== 'true') {
    responseJSON.id = 'addUserMissingParams';
    responseJSON.message = 'Name and age are both required.';
    return respondJSON(request, response, 400, responseJSON);
  }

  return respondJSON(request, response, 200, responseJSON);
};

// Function to handle a not found response
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

// Function to add an incident
const addIncedent = (request, response, body) => {
  let incedent = JSON.parse(JSON.stringify(body));
  
  firebase.writePost(`Posts/${incedent.title}`, incedent);

  const responseJSON = {
    message: 'Created Successfully',
    id: 'addedIncedent',
    added: incedent
  };

  return respondJSON(request, response, 201, responseJSON);
};

// Function to get incidents
const getIncidents = async (request, response, params) => {
  let incidentsObj = {};
  incidentsObj = await firebase.getPosts();

  console.log(params.category);
  const filteredObjects = {};

  if(params.category != 'none'){
    for (const key in incidentsObj) {
      if (incidentsObj[key].category === params.category) {
          filteredObjects[key] = incidentsObj[key];
      }
    }
    incidentsObj = filteredObjects;
  }

  const responseJSON = {
    message: 'Incidents retrieved successfully',
    value: "Incidents",
    incidents: incidentsObj,
  };

  if(request.method === 'HEAD'){
    return respondHead(request, response, 200);
  }
  
  return respondJSON(request, response, 200, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
  addIncedent,
  getIncidents,
};
