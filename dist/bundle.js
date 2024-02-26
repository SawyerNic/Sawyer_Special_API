/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("//Handles our FETCH response. This function is async because it\n//contains an await.\nconst handleResponse = async (response, parseResponse) => {\n\n    //Grab the content section\n    const content = document.querySelector('#content');\n\n    //Based on the status code, display something\n    switch (response.status) {\n        case 200: //success\n            content.innerHTML = `<b>Success</b>`;\n            break;\n        case 201: //created\n            content.innerHTML = '<b>Created</b>';\n            break;\n        case 204: //updated (no response back from server)\n            content.innerHTML = '<b>Updated (No Content)</b>';\n            return;\n        case 400: //bad request\n            content.innerHTML = `<b>Bad Request</b>`;\n            break;\n        case 404:\n            content.innerHTML = `<b>Not Found</b>`;\n            break;\n        default: //any other status code\n            content.innerHTML = `Error code not implemented by client.`;\n            break;\n    }\n\n    //Parse the response to json. This works because we know the server always\n    //sends back json. Await because .json() is an async function.\n    if (parseResponse) {\n        let obj = await response.json();\n\n        if (obj.message) {\n            console.log(obj);\n            content.innerHTML += `<p>Message: ${obj.message}</p>`;\n        }\n\n        if (obj.userList) {\n            // Object.values(obj.userList).map(user => {\n            //     content.innerHTML += `<p>{\"${user.name}\": {\"name\":\"${user.name}\",\"age\":\"${user.age}\"}}</p>`;\n            // })\n            content.innerHTML += `<p>${JSON.stringify(obj.userList)}</p>`;\n        }\n    }\n\n\n};\n\nconst sendGet = async (userForm) => {\n    const action = document.querySelector('#urlField').value;\n    const nameMethod = document.querySelector('#methodSelect').value.toUpperCase();\n\n    let response = await fetch(action, {\n        method: nameMethod,\n        headers: {\n            'Content-Type': 'application/json',\n            'Accept': 'application/json',\n        }\n    })\n\n    handleResponse(response, nameMethod === 'GET');\n\n}\n\n//Uses fetch to send a postRequest. Marksed as async because we use await\n//within it.\nconst sendPost = async (nameForm) => {\n    //Grab all the info from the form\n    const nameAction = nameForm.getAttribute('action');\n    const nameMethod = nameForm.getAttribute('method');\n\n    const nameField = nameForm.querySelector('#nameField');\n    const ageField = nameForm.querySelector('#ageField');\n\n    //Build a data string in the FORM-URLENCODED format.\n    const formData = `name=${nameField.value}&age=${ageField.value}`;\n\n    //Make a fetch request and await a response. Set the method to\n    //the one provided by the form (POST). Set the headers. Content-Type\n    //is the type of data we are sending. Accept is the data we would like\n    //in response. Then add our FORM-URLENCODED string as the body of the request.\n    let response = await fetch(nameAction, {\n        method: nameMethod,\n        headers: {\n            'Content-Type': 'application/x-www-form-urlencoded',\n            'Accept': 'application/json',\n        },\n        body: formData,\n    });\n\n    //Once we have a response, handle it.\n    handleResponse(response);\n};\n\n//Init function is called when window.onload runs (set below).\nconst init = () => {\n    //Grab the form\n    const nameForm = document.querySelector('#nameForm');\n    const userForm = document.querySelector('#userForm');\n\n    //Create an addUser function that cancels the forms default action and\n    //calls our sendPost function above.\n    const addUser = (e) => {\n        e.preventDefault();\n        sendPost(nameForm);\n        return false;\n    }\n\n    const getUser = (e) => {\n        e.preventDefault();\n        sendGet(userForm);\n        return false;\n    }\n\n    //Call addUser when the submit event fires on the form.\n    nameForm.addEventListener('submit', addUser);\n    userForm.addEventListener('submit', getUser);\n\n};\n\n//When the window loads, run init.\nwindow.onload = init;\n\n//# sourceURL=webpack://simple_http/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;