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

eval("\n\n//Handles our FETCH response. This function is async because it\n//contains an await.\nconst handleResponse = async (response, parseResponse) => {\n\n    //Grab the content section\n    const content = document.querySelector('#content');\n\n    //Based on the status code, display something\n    switch (response.status) {\n        case 200: //success\n            content.innerHTML = `<b>Success</b>`;\n            break;\n        case 201: //created\n            content.innerHTML = '<b>Created</b>';\n            break;\n        case 204: //updated (no response back from server)\n            content.innerHTML = '<b>Updated (No Content)</b>';\n            return;\n        case 400: //bad request\n            content.innerHTML = `<b>Bad Request</b>`;\n            break;\n        case 404:\n            content.innerHTML = `<b>Not Found</b>`;\n            break;\n        default: //any other status code\n            content.innerHTML = `Error code not implemented by client.`;\n            break;\n    }\n\n    //Parse the response to json. This works because we know the server always\n    //sends back json. Await because .json() is an async function.\n    if (parseResponse) {\n        let obj = await response.json();\n\n\n        if (obj.userList) {\n            // Object.values(obj.userList).map(user => {\n            //     content.innerHTML += `<p>{\"${user.name}\": {\"name\":\"${user.name}\",\"age\":\"${user.age}\"}}</p>`;\n            // })\n            content.innerHTML += `<p>${JSON.stringify(obj.userList)}</p>`;\n        }\n    }\n\n\n};\n\nconst sendGet = async (url) => {\n\n    console.log(url);\n    let response = await fetch(url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Accept': 'application/json',\n        }\n    })\n\n    handleResponse(response);\n    window.location.href = response.url;\n\n}\n\n//Uses fetch to send a postRequest. Marksed as async because we use await\n//within it.\nconst sendPost = async (url, incedentData) => {\n    //Grab the form\n\n    const headers = {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n    }\n\n    //Create a new incedentData object\n    let response = requestFetch(url, 'POST', headers, incedentData);\n\n    //Once we have a response, handle it.\n    handleResponse(response);\n};\n\n//This function is used to make fetch requests. It is async because it\n//contains an await.\n//We will use this for the GET, HEAD and POST requests.\nconst requestFetch = async (url, method, headers, body) => {\n    console.log(body);\n    body = JSON.stringify(body);\n    let response = await fetch(url, {\n        method: method,\n        headers: headers,\n        body: body,\n    });\n\n    return response;\n}\n\n//Init function is called when window.onload runs (set below).\nconst init = () => {\n\n    //Grab the elements we need to use\n    const titleField = document.querySelector('#title');                //Title\n    const incedentBox = document.querySelector('#incedentField')        //Incedent\n    const categoryForm = document.querySelector('#category');           //Category\n    const submitButton = document.querySelector('#submitButton');       //Submit button\n    const ratePageButton = document.querySelector('#ratePage');         //Rate page button    \n    const message = document.querySelector('#message');                 //Message\n    const ratePage = document.querySelector('#ratePage');               //Rate page\n\n    //Function to n incedent when the button is clicked\n    const addIncedent = (e) => {\n        e.preventDefault();\n\n        //If the fields are filled out, send the incedent to the server\n        if (incedentBox.value != \"\" &&\n            categoryForm.value != \"none\" &&\n            titleField.value != \"\") {\n\n            ratePageButton.disabled = false;\n\n            const ratings = {\n                Chilling: 0,\n                Recoverable: 0,\n                Unpleasant: 0,\n                Unrecoverable: 0,\n                Dissapear_Forever: 0\n            };\n\n            const incidentData = {\n                title: titleField.value,\n                category: categoryForm.value,\n                incedent: incedentBox.value,\n                scores: ratings\n            };\n\n            sendPost('/submit', incidentData);\n        }\n        else {\n            message.innerHTML = \"Please fill out all fields\";\n            console.log(\"Please fill out all fields\");\n        }\n\n\n        return false;\n    }\n\n    //Call addUser when the submit event fires on the form.\n    if (submitButton) {\n        submitButton.addEventListener('click', addIncedent);\n    }\n    if (ratePageButton) {\n        ratePageButton.addEventListener('click', () => sendGet('/thankYou'));\n    }\n\n};\n\n//When the window loads, run init.\nwindow.onload = init;\n\n//# sourceURL=webpack://simple_http/./client/client.js?");

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