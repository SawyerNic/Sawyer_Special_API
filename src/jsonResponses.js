/* There is no new code in this file that is unique to this demo.
   This code is directly taken from the "Status Code" example.
*/
const Users = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondHead = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response!',
  };

  respondJSON(request, response, 200, responseJSON);
};

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

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

const addUser = (request, response, bodyParams) => {
  if (bodyParams.name === '' || bodyParams.age === '') {
    return badRequest(request, response, bodyParams);
  }

  Users[bodyParams.name] = {
    name: bodyParams.name,
    age: bodyParams.age,
  };

  const responseJSON = {
    message: 'Created Successfully',
    id: 'addUser',
  };
  return respondJSON(request, response, 201, responseJSON);
};

// /getUsers with GET retrieves 200 success with results, and HEAD retrieves without results
const getUser = (request, response) => {
  if (request.method === 'HEAD') {
    return respondHead(request, response, 200);
  }

  const responseJSON = {
    userList: Users,
  };
  return respondJSON(request, response, 200, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
  addUser,
  getUser,
};