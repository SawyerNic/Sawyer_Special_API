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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n//Handles our FETCH response. This function is async because it\r\n\r\nconst { result } = __webpack_require__(/*! underscore */ \"./node_modules/underscore/modules/index-all.js\");\r\n\r\n//contains an await.\r\nconst handleResponse = async (response) => {\r\n\r\n    console.log(response.status);\r\n    //Grab the content section\r\n    const content = document.querySelector('#content');\r\n\r\n    //Based on the status code, display something\r\n    switch (response.status) {\r\n        case 200: //success\r\n            console.log(`<b>Success</b>`);\r\n            break;\r\n        case 201: //created\r\n            console.log('<b>Created</b>');\r\n            break;\r\n        case 204: //updated (no response back from server)\r\n            console.log('<b>Updated (No Content)</b>');\r\n            return;\r\n        case 400: //bad request\r\n            console.log(`<b>Bad Request</b>`);\r\n            break;\r\n        case 404:\r\n            console.log(`<b>Not Found</b>`);\r\n            break;\r\n        default: //any other status code\r\n            console.log(`Error code not implemented by client.`);\r\n            break;\r\n    }\r\n\r\n    //If the response is not a 204, we want to parse the JSON and display it.\r\n};\r\n\r\nconst handleGetResponse = async (response) => {\r\n    console.log(response.status);\r\n    //Grab the content section\r\n    const resultsSection = document.getElementById('results');\r\n\r\n    //Based on the status code, display something\r\n    switch (response.status) {\r\n        case 200: //success\r\n            console.log(`<b>Success</b>`);\r\n            break;\r\n        case 201: //created\r\n            console.log('<b>Created</b>');\r\n            break;\r\n        case 204: //updated (no response back from server)\r\n            console.log('<b>Updated (No Content)</b>');\r\n            return;\r\n        case 400: //bad request\r\n            console.log(`<b>Bad Request</b>`);\r\n            break;\r\n        case 404:\r\n            console.log(`<b>Not Found</b>`);\r\n            break;\r\n        default: //any other status code\r\n            console.log(`Error code not implemented by client.`);\r\n            break;\r\n    }\r\n\r\n    //If the response is not a 204, we want to parse the JSON and display it.\r\n    if (response.status !== 204) {\r\n        const data = await response.json();\r\n        const postsObject = data.incidents;\r\n        const typeOfConst = typeof postsObject;\r\n        console.log(typeOfConst);\r\n\r\n        let postPage = document.createElement('div');\r\n\r\n        // Iterate through the object and access each nested object\r\n        for (const postKey in postsObject) {\r\n            const post = postsObject[postKey];\r\n\r\n            // Create a div element for each post\r\n            const postElement = document.createElement('div');\r\n            postElement.className = 'post';\r\n\r\n            // Format the post content\r\n            postElement.innerHTML = `<h2>${post.title}</h2>\r\n                                     <p><strong>Category:</strong> ${post.category}</p>\r\n                                     <p><strong>Incident:</strong> ${post.incedent}</p>`;\r\n\r\n            // Add the formatted post element to the results section\r\n            postPage.appendChild(postElement);\r\n        }\r\n\r\n        resultsSection.innerHTML = postPage.innerHTML;\r\n\r\n    }\r\n}\r\n\r\nconst handleHeadResponse = async (response) => {\r\n    console.log(response.status);\r\n    //Grab the content section\r\n    const resultsSection = document.getElementById('results');\r\n\r\n    //Based on the status code, display something\r\n    switch (response.status) {\r\n        case 200: //success\r\n            resultsSection.innerHTML = `<b>Success</b>`;\r\n            break;\r\n        case 201: //created\r\n            resultsSection.innerHTML = '<b>Created</b>';\r\n            break;\r\n        case 204: //updated (no response back from server)\r\n            resultsSection.innerHTML = '<b>Updated (No Content)</b>';\r\n            return;\r\n        case 400: //bad request\r\n            resultsSection.innerHTML = `<b>Bad Request</b>`;\r\n            break;\r\n        case 404:\r\n            resultsSection.innerHTML = `<b>Not Found</b>`;\r\n            break;\r\n        default: //any other status code\r\n            resultsSection.innerHTML = `Error code not implemented by client.`;\r\n            break;\r\n    }\r\n}\r\n\r\nconst sendHead = async (url) => {\r\n    let headers = {\r\n        'Content-Type': 'application/x-www-form-urlencoded',\r\n        'Accept': 'application/json',\r\n    }\r\n\r\n    let response = await requestFetch(url, 'HEAD', headers, null);\r\n\r\n    handleHeadResponse(response);\r\n}\r\n\r\nconst sendGet = async (url) => {\r\n    let headers = {\r\n        'Content-Type': 'application/x-www-form-urlencoded',\r\n        'Accept': 'application/json',\r\n    }\r\n\r\n    let queryString = `category=${document.querySelector('#category').value}`\r\n\r\n        url += '?' + queryString;\r\n    \r\n    console.log(url);\r\n    let response = await requestFetch(url, 'GET', headers, null);\r\n\r\n    handleGetResponse(response);\r\n\r\n    if (url === '/feed') {\r\n        window.location.href = response.url;\r\n    }\r\n}\r\n\r\n//Uses fetch to send a postRequest. Marksed as async because we use await\r\n//within it.\r\nconst sendPost = async (url, body) => {\r\n    //Grab the form\r\n    const incedent = JSON.stringify(body);\r\n\r\n    //Create a new incedentData object\r\n    let headers = {\r\n        'Content-Type': 'application/x-www-form-urlencoded',\r\n        'Accept': 'application/json',\r\n    }\r\n\r\n    //Once we have a response, handle it.\r\n    const response = await requestFetch(url, 'POST', headers, incedent);\r\n    handleResponse(response);\r\n};\r\n\r\n//This function is used to make fetch requests. It is async because it\r\n//contains an await.\r\n//We will use this for the GET, HEAD and POST requests.\r\nconst requestFetch = async (url, method, headers, body) => {\r\n    let response = await fetch(url, {\r\n        method: method,\r\n        headers: headers,\r\n        body: body,\r\n    });\r\n\r\n    return response;\r\n}\r\n\r\n//Init function is called when window.onload runs (set below).\r\nconst init = () => {\r\n\r\n    //Grab the elements we need to use\r\n    const titleField = document.querySelector('#title');                //Title\r\n    const incedentBox = document.querySelector('#incedentField')        //Incedent\r\n    const categoryForm = document.querySelector('#category');           //Category\r\n    const submitButton = document.querySelector('#submitButton');       //Submit button\r\n    const ratePageButton = document.querySelector('#ratePage');         //Rate page button    \r\n    const message = document.querySelector('#message');                 //Message\r\n    const method = document.querySelector('#method');\r\n    const getFeed = document.querySelector('#getIncedents');\r\n    //Rate page\r\n\r\n    //Function to n incedent when the button is clicked\r\n    const addIncedent = (e) => {\r\n        e.preventDefault();\r\n\r\n        //If the fields are filled out, send the incedent to the server\r\n        if (incedentBox.value != \"\" &&\r\n            categoryForm.value != \"none\" &&\r\n            titleField.value != \"\") {\r\n\r\n            ratePageButton.disabled = false;\r\n\r\n            ratings = {\r\n                Chilling: 0,\r\n                Recoverable: 0,\r\n                Unpleasant: 0,\r\n                Unrecoverable: 0,\r\n                Dissapear_Forever: 0\r\n            };\r\n\r\n            const incidentData = {\r\n                title: titleField.value,\r\n                category: categoryForm.value,\r\n                incedent: incedentBox.value,\r\n                scores: ratings\r\n            };\r\n\r\n            sendPost('/submit', incidentData);\r\n        }\r\n        else {\r\n            message.innerHTML = \"Please fill out all fields\";\r\n            console.log(\"Please fill out all fields\");\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    //Call addUser when the submit event fires on the form.\r\n    if (submitButton) {\r\n        submitButton.addEventListener('click', addIncedent);\r\n    }\r\n    if (ratePageButton) {\r\n        ratePageButton.addEventListener('click', () => sendGet('/feed'));\r\n    }\r\n\r\n    if (getFeed) {\r\n        getFeed.addEventListener('click', () => {\r\n        switch (method.value) {\r\n            case 'GET':\r\n                sendGet('/getIncidents');\r\n                break;\r\n            case 'HEAD':\r\n                sendHead('/getIncidents')\r\n                break;\r\n            default:\r\n                console.log(\"Invalid method\");\r\n                break;\r\n        }\r\n    });\r\n    }\r\n\r\n};\r\n\r\n//When the window loads, run init.\r\nwindow.onload = init;\n\n//# sourceURL=webpack://simple_http/./client/client.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_baseCreate.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseCreate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ baseCreate)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n\r\n// Create a naked function reference for surrogate-prototype-swapping.\r\nfunction ctor() {\r\n  return function(){};\r\n}\r\n\r\n// An internal function for creating a new object that inherits from another.\r\nfunction baseCreate(prototype) {\r\n  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prototype)) return {};\r\n  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeCreate) return (0,_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeCreate)(prototype);\r\n  var Ctor = ctor();\r\n  Ctor.prototype = prototype;\r\n  var result = new Ctor;\r\n  Ctor.prototype = null;\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_baseIteratee.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseIteratee.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ baseIteratee)\n/* harmony export */ });\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/underscore/modules/identity.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher.js */ \"./node_modules/underscore/modules/matcher.js\");\n/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.js */ \"./node_modules/underscore/modules/property.js\");\n/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_optimizeCb.js */ \"./node_modules/underscore/modules/_optimizeCb.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// An internal function to generate callbacks that can be applied to each\r\n// element in a collection, returning the desired result — either `_.identity`,\r\n// an arbitrary callback, a property matcher, or a property accessor.\r\nfunction baseIteratee(value, context, argCount) {\r\n  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) return (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(value, context, argCount);\r\n  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(value) && !(0,_isArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value)) return (0,_matcher_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(value);\r\n  return (0,_property_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(value);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_cb.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/_cb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cb)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ \"./node_modules/underscore/modules/_baseIteratee.js\");\n/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteratee.js */ \"./node_modules/underscore/modules/iteratee.js\");\n\r\n\r\n\r\n\r\n// The function we call internally to generate a callback. It invokes\r\n// `_.iteratee` if overridden, otherwise `baseIteratee`.\r\nfunction cb(value, context, argCount) {\r\n  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iteratee(value, context);\r\n  return (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, context, argCount);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_cb.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_chainResult.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_chainResult.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chainResult)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n\r\n\r\n// Helper function to continue chaining intermediate results.\r\nfunction chainResult(instance, obj) {\r\n  return instance._chain ? (0,_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj).chain() : obj;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_chainResult.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_collectNonEnumProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/underscore/modules/_collectNonEnumProps.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ collectNonEnumProps)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n\r\n\r\n\r\n\r\n// Internal helper to create a simple lookup structure.\r\n// `collectNonEnumProps` used to depend on `_.contains`, but this led to\r\n// circular imports. `emulatedSet` is a one-off solution that only works for\r\n// arrays of strings.\r\nfunction emulatedSet(keys) {\r\n  var hash = {};\r\n  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;\r\n  return {\r\n    contains: function(key) { return hash[key] === true; },\r\n    push: function(key) {\r\n      hash[key] = true;\r\n      return keys.push(key);\r\n    }\r\n  };\r\n}\r\n\r\n// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't\r\n// be iterated by `for key in ...` and thus missed. Extends `keys` in place if\r\n// needed.\r\nfunction collectNonEnumProps(obj, keys) {\r\n  keys = emulatedSet(keys);\r\n  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerableProps.length;\r\n  var constructor = obj.constructor;\r\n  var proto = ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(constructor) && constructor.prototype) || _setup_js__WEBPACK_IMPORTED_MODULE_0__.ObjProto;\r\n\r\n  // Constructor is a special case.\r\n  var prop = 'constructor';\r\n  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, prop) && !keys.contains(prop)) keys.push(prop);\r\n\r\n  while (nonEnumIdx--) {\r\n    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerableProps[nonEnumIdx];\r\n    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {\r\n      keys.push(prop);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_collectNonEnumProps.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createAssigner.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore/modules/_createAssigner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAssigner)\n/* harmony export */ });\n// An internal function for creating assigner functions.\r\nfunction createAssigner(keysFunc, defaults) {\r\n  return function(obj) {\r\n    var length = arguments.length;\r\n    if (defaults) obj = Object(obj);\r\n    if (length < 2 || obj == null) return obj;\r\n    for (var index = 1; index < length; index++) {\r\n      var source = arguments[index],\r\n          keys = keysFunc(source),\r\n          l = keys.length;\r\n      for (var i = 0; i < l; i++) {\r\n        var key = keys[i];\r\n        if (!defaults || obj[key] === void 0) obj[key] = source[key];\r\n      }\r\n    }\r\n    return obj;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createAssigner.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createEscaper.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_createEscaper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEscaper)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n// Internal helper to generate functions for escaping and unescaping strings\r\n// to/from HTML interpolation.\r\nfunction createEscaper(map) {\r\n  var escaper = function(match) {\r\n    return map[match];\r\n  };\r\n  // Regexes for identifying a key that needs to be escaped.\r\n  var source = '(?:' + (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(map).join('|') + ')';\r\n  var testRegexp = RegExp(source);\r\n  var replaceRegexp = RegExp(source, 'g');\r\n  return function(string) {\r\n    string = string == null ? '' : '' + string;\r\n    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createEscaper.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createIndexFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_createIndexFinder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createIndexFinder)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNaN.js */ \"./node_modules/underscore/modules/isNaN.js\");\n\r\n\r\n\r\n\r\n// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.\r\nfunction createIndexFinder(dir, predicateFind, sortedIndex) {\r\n  return function(array, item, idx) {\r\n    var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array);\r\n    if (typeof idx == 'number') {\r\n      if (dir > 0) {\r\n        i = idx >= 0 ? idx : Math.max(idx + length, i);\r\n      } else {\r\n        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;\r\n      }\r\n    } else if (sortedIndex && idx && length) {\r\n      idx = sortedIndex(array, item);\r\n      return array[idx] === item ? idx : -1;\r\n    }\r\n    if (item !== item) {\r\n      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n      return idx >= 0 ? idx + i : -1;\r\n    }\r\n    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {\r\n      if (array[idx] === item) return idx;\r\n    }\r\n    return -1;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createIndexFinder.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createPredicateIndexFinder.js":
/*!************************************************************************!*\
  !*** ./node_modules/underscore/modules/_createPredicateIndexFinder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPredicateIndexFinder)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n\r\n\r\n\r\n// Internal function to generate `_.findIndex` and `_.findLastIndex`.\r\nfunction createPredicateIndexFinder(dir) {\r\n  return function(array, predicate, context) {\r\n    predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(predicate, context);\r\n    var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array);\r\n    var index = dir > 0 ? 0 : length - 1;\r\n    for (; index >= 0 && index < length; index += dir) {\r\n      if (predicate(array[index], index, array)) return index;\r\n    }\r\n    return -1;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createPredicateIndexFinder.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createReduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_createReduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createReduce)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ \"./node_modules/underscore/modules/_optimizeCb.js\");\n\r\n\r\n\r\n\r\n// Internal helper to create a reducing function, iterating left or right.\r\nfunction createReduce(dir) {\r\n  // Wrap code that reassigns argument variables in a separate function than\r\n  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)\r\n  var reducer = function(obj, iteratee, memo, initial) {\r\n    var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj),\r\n        length = (_keys || obj).length,\r\n        index = dir > 0 ? 0 : length - 1;\r\n    if (!initial) {\r\n      memo = obj[_keys ? _keys[index] : index];\r\n      index += dir;\r\n    }\r\n    for (; index >= 0 && index < length; index += dir) {\r\n      var currentKey = _keys ? _keys[index] : index;\r\n      memo = iteratee(memo, obj[currentKey], currentKey, obj);\r\n    }\r\n    return memo;\r\n  };\r\n\r\n  return function(obj, iteratee, memo, context) {\r\n    var initial = arguments.length >= 3;\r\n    return reducer(obj, (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(iteratee, context, 4), memo, initial);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createReduce.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_createSizePropertyCheck.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/_createSizePropertyCheck.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createSizePropertyCheck)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Common internal logic for `isArrayLike` and `isBufferLike`.\r\nfunction createSizePropertyCheck(getSizeProperty) {\r\n  return function(collection) {\r\n    var sizeProperty = getSizeProperty(collection);\r\n    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__.MAX_ARRAY_INDEX;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_createSizePropertyCheck.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_deepGet.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_deepGet.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deepGet)\n/* harmony export */ });\n// Internal function to obtain a nested property in `obj` along `path`.\r\nfunction deepGet(obj, path) {\r\n  var length = path.length;\r\n  for (var i = 0; i < length; i++) {\r\n    if (obj == null) return void 0;\r\n    obj = obj[path[i]];\r\n  }\r\n  return length ? obj : void 0;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_deepGet.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_escapeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_escapeMap.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Internal list of HTML entities for escaping.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  '&': '&amp;',\r\n  '<': '&lt;',\r\n  '>': '&gt;',\r\n  '\"': '&quot;',\r\n  \"'\": '&#x27;',\r\n  '`': '&#x60;'\r\n});\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_escapeMap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_executeBound.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_executeBound.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ executeBound)\n/* harmony export */ });\n/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ \"./node_modules/underscore/modules/_baseCreate.js\");\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n\r\n\r\n\r\n// Internal function to execute `sourceFunc` bound to `context` with optional\r\n// `args`. Determines whether to execute a function as a constructor or as a\r\n// normal function.\r\nfunction executeBound(sourceFunc, boundFunc, context, callingContext, args) {\r\n  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);\r\n  var self = (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sourceFunc.prototype);\r\n  var result = sourceFunc.apply(self, args);\r\n  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result)) return result;\r\n  return self;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_executeBound.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_flatten.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ flatten)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ \"./node_modules/underscore/modules/isArguments.js\");\n\r\n\r\n\r\n\r\n\r\n// Internal implementation of a recursive `flatten` function.\r\nfunction flatten(input, depth, strict, output) {\r\n  output = output || [];\r\n  if (!depth && depth !== 0) {\r\n    depth = Infinity;\r\n  } else if (depth <= 0) {\r\n    return output.concat(input);\r\n  }\r\n  var idx = output.length;\r\n  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input); i < length; i++) {\r\n    var value = input[i];\r\n    if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value))) {\r\n      // Flatten current level of array or arguments object.\r\n      if (depth > 1) {\r\n        flatten(value, depth - 1, strict, output);\r\n        idx = output.length;\r\n      } else {\r\n        var j = 0, len = value.length;\r\n        while (j < len) output[idx++] = value[j++];\r\n      }\r\n    } else if (!strict) {\r\n      output[idx++] = value;\r\n    }\r\n  }\r\n  return output;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_flatten.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_getByteLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_getByteLength.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ \"./node_modules/underscore/modules/_shallowProperty.js\");\n\r\n\r\n// Internal helper to obtain the `byteLength` property of an object.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('byteLength'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_getByteLength.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_getLength.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_getLength.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ \"./node_modules/underscore/modules/_shallowProperty.js\");\n\r\n\r\n// Internal helper to obtain the `length` property of an object.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('length'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_getLength.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_group.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_group.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ group)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n\r\n\r\n\r\n// An internal function used for aggregate \"group by\" operations.\r\nfunction group(behavior, partition) {\r\n  return function(obj, iteratee, context) {\r\n    var result = partition ? [[], []] : {};\r\n    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context);\r\n    (0,_each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, function(value, index) {\r\n      var key = iteratee(value, index, obj);\r\n      behavior(result, value, key);\r\n    });\r\n    return result;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_group.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/_has.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ has)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Internal function to check whether `key` is an own property name of `obj`.\r\nfunction has(obj, key) {\r\n  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty.call(obj, key);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_has.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_hasObjectTag.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_hasObjectTag.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Object'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_hasObjectTag.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_isArrayLike.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ \"./node_modules/underscore/modules/_createSizePropertyCheck.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n\r\n\r\n\r\n// Internal helper for collection methods to determine whether a collection\r\n// should be iterated as an array or as an object.\r\n// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength\r\n// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_isArrayLike.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_isBufferLike.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_isBufferLike.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ \"./node_modules/underscore/modules/_createSizePropertyCheck.js\");\n/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getByteLength.js */ \"./node_modules/underscore/modules/_getByteLength.js\");\n\r\n\r\n\r\n// Internal helper to determine whether we should spend extensive checks against\r\n// `ArrayBuffer` et al.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_isBufferLike.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_keyInObj.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/_keyInObj.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ keyInObj)\n/* harmony export */ });\n// Internal `_.pick` helper function to determine whether `key` is an enumerable\r\n// property name of `obj`.\r\nfunction keyInObj(value, key, obj) {\r\n  return key in obj;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_keyInObj.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_methodFingerprint.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_methodFingerprint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ie11fingerprint: () => (/* binding */ ie11fingerprint),\n/* harmony export */   mapMethods: () => (/* binding */ mapMethods),\n/* harmony export */   setMethods: () => (/* binding */ setMethods),\n/* harmony export */   weakMapMethods: () => (/* binding */ weakMapMethods)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allKeys.js */ \"./node_modules/underscore/modules/allKeys.js\");\n\r\n\r\n\r\n\r\n// Since the regular `Object.prototype.toString` type tests don't work for\r\n// some types in IE 11, we use a fingerprinting heuristic instead, based\r\n// on the methods. It's not great, but it's the best we got.\r\n// The fingerprint method lists are defined below.\r\nfunction ie11fingerprint(methods) {\r\n  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(methods);\r\n  return function(obj) {\r\n    if (obj == null) return false;\r\n    // `Map`, `WeakMap` and `Set` have no enumerable keys.\r\n    var keys = (0,_allKeys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\r\n    if ((0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keys)) return false;\r\n    for (var i = 0; i < length; i++) {\r\n      if (!(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj[methods[i]])) return false;\r\n    }\r\n    // If we are testing against `WeakMap`, we need to ensure that\r\n    // `obj` doesn't have a `forEach` method in order to distinguish\r\n    // it from a regular `Map`.\r\n    return methods !== weakMapMethods || !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj[forEachName]);\r\n  };\r\n}\r\n\r\n// In the interest of compact minification, we write\r\n// each string in the fingerprints only once.\r\nvar forEachName = 'forEach',\r\n    hasName = 'has',\r\n    commonInit = ['clear', 'delete'],\r\n    mapTail = ['get', hasName, 'set'];\r\n\r\n// `Map`, `WeakMap` and `Set` each have slightly different\r\n// combinations of the above sublists.\r\nvar mapMethods = commonInit.concat(forEachName, mapTail),\r\n    weakMapMethods = commonInit.concat(mapTail),\r\n    setMethods = ['add'].concat(commonInit, forEachName, hasName);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_methodFingerprint.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_optimizeCb.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_optimizeCb.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ optimizeCb)\n/* harmony export */ });\n// Internal function that returns an efficient (for current engines) version\r\n// of the passed-in callback, to be repeatedly applied in other Underscore\r\n// functions.\r\nfunction optimizeCb(func, context, argCount) {\r\n  if (context === void 0) return func;\r\n  switch (argCount == null ? 3 : argCount) {\r\n    case 1: return function(value) {\r\n      return func.call(context, value);\r\n    };\r\n    // The 2-argument case is omitted because we’re not using it.\r\n    case 3: return function(value, index, collection) {\r\n      return func.call(context, value, index, collection);\r\n    };\r\n    case 4: return function(accumulator, value, index, collection) {\r\n      return func.call(context, accumulator, value, index, collection);\r\n    };\r\n  }\r\n  return function() {\r\n    return func.apply(context, arguments);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_optimizeCb.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_setup.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_setup.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArrayProto: () => (/* binding */ ArrayProto),\n/* harmony export */   MAX_ARRAY_INDEX: () => (/* binding */ MAX_ARRAY_INDEX),\n/* harmony export */   ObjProto: () => (/* binding */ ObjProto),\n/* harmony export */   SymbolProto: () => (/* binding */ SymbolProto),\n/* harmony export */   VERSION: () => (/* binding */ VERSION),\n/* harmony export */   _isFinite: () => (/* binding */ _isFinite),\n/* harmony export */   _isNaN: () => (/* binding */ _isNaN),\n/* harmony export */   hasEnumBug: () => (/* binding */ hasEnumBug),\n/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),\n/* harmony export */   nativeCreate: () => (/* binding */ nativeCreate),\n/* harmony export */   nativeIsArray: () => (/* binding */ nativeIsArray),\n/* harmony export */   nativeIsView: () => (/* binding */ nativeIsView),\n/* harmony export */   nativeKeys: () => (/* binding */ nativeKeys),\n/* harmony export */   nonEnumerableProps: () => (/* binding */ nonEnumerableProps),\n/* harmony export */   push: () => (/* binding */ push),\n/* harmony export */   root: () => (/* binding */ root),\n/* harmony export */   slice: () => (/* binding */ slice),\n/* harmony export */   supportsArrayBuffer: () => (/* binding */ supportsArrayBuffer),\n/* harmony export */   supportsDataView: () => (/* binding */ supportsDataView),\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n// Current version.\r\nvar VERSION = '1.13.6';\r\n\r\n// Establish the root object, `window` (`self`) in the browser, `global`\r\n// on the server, or `this` in some virtual machines. We use `self`\r\n// instead of `window` for `WebWorker` support.\r\nvar root = (typeof self == 'object' && self.self === self && self) ||\r\n          (typeof global == 'object' && global.global === global && global) ||\r\n          Function('return this')() ||\r\n          {};\r\n\r\n// Save bytes in the minified (but not gzipped) version:\r\nvar ArrayProto = Array.prototype, ObjProto = Object.prototype;\r\nvar SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;\r\n\r\n// Create quick reference variables for speed access to core prototypes.\r\nvar push = ArrayProto.push,\r\n    slice = ArrayProto.slice,\r\n    toString = ObjProto.toString,\r\n    hasOwnProperty = ObjProto.hasOwnProperty;\r\n\r\n// Modern feature detection.\r\nvar supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',\r\n    supportsDataView = typeof DataView !== 'undefined';\r\n\r\n// All **ECMAScript 5+** native function implementations that we hope to use\r\n// are declared here.\r\nvar nativeIsArray = Array.isArray,\r\n    nativeKeys = Object.keys,\r\n    nativeCreate = Object.create,\r\n    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;\r\n\r\n// Create references to these builtin functions because we override them.\r\nvar _isNaN = isNaN,\r\n    _isFinite = isFinite;\r\n\r\n// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.\r\nvar hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');\r\nvar nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',\r\n  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];\r\n\r\n// The largest integer that can be represented exactly.\r\nvar MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_setup.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_shallowProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/_shallowProperty.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shallowProperty)\n/* harmony export */ });\n// Internal helper to generate a function to obtain property `key` from `obj`.\r\nfunction shallowProperty(key) {\r\n  return function(obj) {\r\n    return obj == null ? void 0 : obj[key];\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_shallowProperty.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_stringTagBug.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_stringTagBug.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasStringTagBug: () => (/* binding */ hasStringTagBug),\n/* harmony export */   isIE11: () => (/* binding */ isIE11)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasObjectTag.js */ \"./node_modules/underscore/modules/_hasObjectTag.js\");\n\r\n\r\n\r\n// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.\r\n// In IE 11, the most common among them, this problem also applies to\r\n// `Map`, `WeakMap` and `Set`.\r\nvar hasStringTagBug = (\r\n      _setup_js__WEBPACK_IMPORTED_MODULE_0__.supportsDataView && (0,_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new DataView(new ArrayBuffer(8)))\r\n    ),\r\n    isIE11 = (typeof Map !== 'undefined' && (0,_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Map));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_stringTagBug.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_tagTester.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_tagTester.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tagTester)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Internal function for creating a `toString`-based type tester.\r\nfunction tagTester(name) {\r\n  var tag = '[object ' + name + ']';\r\n  return function(obj) {\r\n    return _setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj) === tag;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_tagTester.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_toBufferView.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_toBufferView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toBufferView)\n/* harmony export */ });\n/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getByteLength.js */ \"./node_modules/underscore/modules/_getByteLength.js\");\n\r\n\r\n// Internal function to wrap or shallow-copy an ArrayBuffer,\r\n// typed array or DataView to a new view, reusing the buffer.\r\nfunction toBufferView(bufferSource) {\r\n  return new Uint8Array(\r\n    bufferSource.buffer || bufferSource,\r\n    bufferSource.byteOffset || 0,\r\n    (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bufferSource)\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_toBufferView.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_toPath.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/_toPath.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPath)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPath.js */ \"./node_modules/underscore/modules/toPath.js\");\n\r\n\r\n\r\n// Internal wrapper for `_.toPath` to enable minification.\r\n// Similar to `cb` for `_.iteratee`.\r\nfunction toPath(path) {\r\n  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toPath(path);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_toPath.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/_unescapeMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_unescapeMap.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invert.js */ \"./node_modules/underscore/modules/invert.js\");\n/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ \"./node_modules/underscore/modules/_escapeMap.js\");\n\r\n\r\n\r\n// Internal list of HTML entities for unescaping.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_invert_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/_unescapeMap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/after.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/after.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ after)\n/* harmony export */ });\n// Returns a function that will only be executed on and after the Nth call.\r\nfunction after(times, func) {\r\n  return function() {\r\n    if (--times < 1) {\r\n      return func.apply(this, arguments);\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/after.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/allKeys.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/allKeys.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ allKeys)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ \"./node_modules/underscore/modules/_collectNonEnumProps.js\");\n\r\n\r\n\r\n\r\n// Retrieve all the enumerable property names of an object.\r\nfunction allKeys(obj) {\r\n  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) return [];\r\n  var keys = [];\r\n  for (var key in obj) keys.push(key);\r\n  // Ahem, IE < 9.\r\n  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.hasEnumBug) (0,_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, keys);\r\n  return keys;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/allKeys.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/before.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/before.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ before)\n/* harmony export */ });\n// Returns a function that will only be executed up to (but not including) the\r\n// Nth call.\r\nfunction before(times, func) {\r\n  var memo;\r\n  return function() {\r\n    if (--times > 0) {\r\n      memo = func.apply(this, arguments);\r\n    }\r\n    if (times <= 1) func = null;\r\n    return memo;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/before.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/bind.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/bind.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_executeBound.js */ \"./node_modules/underscore/modules/_executeBound.js\");\n\r\n\r\n\r\n\r\n// Create a function bound to a given object (assigning `this`, and arguments,\r\n// optionally).\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(func, context, args) {\r\n  if (!(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(func)) throw new TypeError('Bind must be called on a function');\r\n  var bound = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(callArgs) {\r\n    return (0,_executeBound_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(func, bound, context, this, args.concat(callArgs));\r\n  });\r\n  return bound;\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/bind.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/bindAll.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/bindAll.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind.js */ \"./node_modules/underscore/modules/bind.js\");\n\r\n\r\n\r\n\r\n// Bind a number of an object's methods to that object. Remaining arguments\r\n// are the method names to be bound. Useful for ensuring that all callbacks\r\n// defined on an object belong to it.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj, keys) {\r\n  keys = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(keys, false, false);\r\n  var index = keys.length;\r\n  if (index < 1) throw new Error('bindAll must be passed function names');\r\n  while (index--) {\r\n    var key = keys[index];\r\n    obj[key] = (0,_bind_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj[key], obj);\r\n  }\r\n  return obj;\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/bindAll.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/chain.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chain.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chain)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n\r\n\r\n// Start chaining a wrapped Underscore object.\r\nfunction chain(obj) {\r\n  var instance = (0,_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  instance._chain = true;\r\n  return instance;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/chain.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/chunk.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chunk.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chunk)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Chunk a single array into multiple arrays, each containing `count` or fewer\r\n// items.\r\nfunction chunk(array, count) {\r\n  if (count == null || count < 1) return [];\r\n  var result = [];\r\n  var i = 0, length = array.length;\r\n  while (i < length) {\r\n    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, i, i += count));\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/chunk.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/clone.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/clone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clone)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ \"./node_modules/underscore/modules/extend.js\");\n\r\n\r\n\r\n\r\n// Create a (shallow-cloned) duplicate of an object.\r\nfunction clone(obj) {\r\n  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) return obj;\r\n  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) ? obj.slice() : (0,_extend_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, obj);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/clone.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/compact.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compact.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compact)\n/* harmony export */ });\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/underscore/modules/filter.js\");\n\r\n\r\n// Trim out all falsy values from an array.\r\nfunction compact(array) {\r\n  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, Boolean);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/compact.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compose.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compose)\n/* harmony export */ });\n// Returns a function that is the composition of a list of functions, each\r\n// consuming the return value of the function that follows.\r\nfunction compose() {\r\n  var args = arguments;\r\n  var start = args.length - 1;\r\n  return function() {\r\n    var i = start;\r\n    var result = args[start].apply(this, arguments);\r\n    while (i--) result = args[i].call(this, result);\r\n    return result;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/compose.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ constant)\n/* harmony export */ });\n// Predicate-generating function. Often useful outside of Underscore.\r\nfunction constant(value) {\r\n  return function() {\r\n    return value;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/constant.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/contains.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contains)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOf.js */ \"./node_modules/underscore/modules/indexOf.js\");\n\r\n\r\n\r\n\r\n// Determine if the array or object contains a given item (using `===`).\r\nfunction contains(obj, item, fromIndex, guard) {\r\n  if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) obj = (0,_values_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\r\n  if (typeof fromIndex != 'number' || guard) fromIndex = 0;\r\n  return (0,_indexOf_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, item, fromIndex) >= 0;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/contains.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/countBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/countBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ \"./node_modules/underscore/modules/_group.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n\r\n\r\n\r\n// Counts instances of an object that group by a certain criterion. Pass\r\n// either a string attribute to count by, or a function that returns the\r\n// criterion.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(result, value, key) {\r\n  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result, key)) result[key]++; else result[key] = 1;\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/countBy.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/create.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/create.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ \"./node_modules/underscore/modules/_baseCreate.js\");\n/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendOwn.js */ \"./node_modules/underscore/modules/extendOwn.js\");\n\r\n\r\n\r\n// Creates an object that inherits from the given prototype object.\r\n// If additional properties are provided then they will be added to the\r\n// created object.\r\nfunction create(prototype, props) {\r\n  var result = (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prototype);\r\n  if (props) (0,_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result, props);\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/create.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/debounce.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/debounce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ \"./node_modules/underscore/modules/now.js\");\n\r\n\r\n\r\n// When a sequence of calls of the returned function ends, the argument\r\n// function is triggered. The end of a sequence is defined by the `wait`\r\n// parameter. If `immediate` is passed, the argument function will be\r\n// triggered at the beginning of the sequence instead of at the end.\r\nfunction debounce(func, wait, immediate) {\r\n  var timeout, previous, args, result, context;\r\n\r\n  var later = function() {\r\n    var passed = (0,_now_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() - previous;\r\n    if (wait > passed) {\r\n      timeout = setTimeout(later, wait - passed);\r\n    } else {\r\n      timeout = null;\r\n      if (!immediate) result = func.apply(context, args);\r\n      // This check is needed because `func` can recursively invoke `debounced`.\r\n      if (!timeout) args = context = null;\r\n    }\r\n  };\r\n\r\n  var debounced = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(_args) {\r\n    context = this;\r\n    args = _args;\r\n    previous = (0,_now_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    if (!timeout) {\r\n      timeout = setTimeout(later, wait);\r\n      if (immediate) result = func.apply(context, args);\r\n    }\r\n    return result;\r\n  });\r\n\r\n  debounced.cancel = function() {\r\n    clearTimeout(timeout);\r\n    timeout = args = context = null;\r\n  };\r\n\r\n  return debounced;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/debounce.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/defaults.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ \"./node_modules/underscore/modules/_createAssigner.js\");\n/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ \"./node_modules/underscore/modules/allKeys.js\");\n\r\n\r\n\r\n// Fill in a given object with default properties.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/defaults.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/defer.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/defer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ \"./node_modules/underscore/modules/partial.js\");\n/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ \"./node_modules/underscore/modules/delay.js\");\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n\r\n\r\n\r\n\r\n// Defers a function, scheduling it to run after the current call stack has\r\n// cleared.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_partial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 1));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/defer.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/delay.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/delay.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n\r\n\r\n// Delays a function for the given number of milliseconds, and then calls\r\n// it with the arguments supplied.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(func, wait, args) {\r\n  return setTimeout(function() {\r\n    return func.apply(null, args);\r\n  }, wait);\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/delay.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/difference.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/difference.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/underscore/modules/filter.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/underscore/modules/contains.js\");\n\r\n\r\n\r\n\r\n\r\n// Take the difference between one array and a number of other arrays.\r\n// Only the elements present in just the first array will remain.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(array, rest) {\r\n  rest = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rest, true, true);\r\n  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(array, function(value){\r\n    return !(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rest, value);\r\n  });\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/difference.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/each.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/each.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ each)\n/* harmony export */ });\n/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ \"./node_modules/underscore/modules/_optimizeCb.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n\r\n// The cornerstone for collection functions, an `each`\r\n// implementation, aka `forEach`.\r\n// Handles raw objects in addition to array-likes. Treats all\r\n// sparse array-likes as if they were dense.\r\nfunction each(obj, iteratee, context) {\r\n  iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context);\r\n  var i, length;\r\n  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj)) {\r\n    for (i = 0, length = obj.length; i < length; i++) {\r\n      iteratee(obj[i], i, obj);\r\n    }\r\n  } else {\r\n    var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\r\n    for (i = 0, length = _keys.length; i < length; i++) {\r\n      iteratee(obj[_keys[i]], _keys[i], obj);\r\n    }\r\n  }\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/each.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/escape.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ \"./node_modules/underscore/modules/_createEscaper.js\");\n/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ \"./node_modules/underscore/modules/_escapeMap.js\");\n\r\n\r\n\r\n// Function for escaping strings to HTML interpolation.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/escape.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/every.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/every.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ every)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n\r\n// Determine whether all of the elements pass a truth test.\r\nfunction every(obj, predicate, context) {\r\n  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(predicate, context);\r\n  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj),\r\n      length = (_keys || obj).length;\r\n  for (var index = 0; index < length; index++) {\r\n    var currentKey = _keys ? _keys[index] : index;\r\n    if (!predicate(obj[currentKey], currentKey, obj)) return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/every.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/extend.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/extend.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ \"./node_modules/underscore/modules/_createAssigner.js\");\n/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ \"./node_modules/underscore/modules/allKeys.js\");\n\r\n\r\n\r\n// Extend a given object with all the properties in passed-in object(s).\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/extend.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/extendOwn.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/extendOwn.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ \"./node_modules/underscore/modules/_createAssigner.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n// Assigns a given object with all the own properties in the passed-in\r\n// object(s).\r\n// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/extendOwn.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/filter.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ filter)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n\r\n\r\n\r\n// Return all the elements that pass a truth test.\r\nfunction filter(obj, predicate, context) {\r\n  var results = [];\r\n  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(predicate, context);\r\n  (0,_each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, function(value, index, list) {\r\n    if (predicate(value, index, list)) results.push(value);\r\n  });\r\n  return results;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/filter.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/find.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/find.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ find)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ \"./node_modules/underscore/modules/findIndex.js\");\n/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findKey.js */ \"./node_modules/underscore/modules/findKey.js\");\n\r\n\r\n\r\n\r\n// Return the first value which passes a truth test.\r\nfunction find(obj, predicate, context) {\r\n  var keyFinder = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n  var key = keyFinder(obj, predicate, context);\r\n  if (key !== void 0 && key !== -1) return obj[key];\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/find.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/findIndex.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findIndex.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ \"./node_modules/underscore/modules/_createPredicateIndexFinder.js\");\n\r\n\r\n// Returns the first index on an array-like that passes a truth test.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/findIndex.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/findKey.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/findKey.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findKey)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n// Returns the first key on an object that passes a truth test.\r\nfunction findKey(obj, predicate, context) {\r\n  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(predicate, context);\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj), key;\r\n  for (var i = 0, length = _keys.length; i < length; i++) {\r\n    key = _keys[i];\r\n    if (predicate(obj[key], key, obj)) return key;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/findKey.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/findLastIndex.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/findLastIndex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ \"./node_modules/underscore/modules/_createPredicateIndexFinder.js\");\n\r\n\r\n// Returns the last index on an array-like that passes a truth test.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/findLastIndex.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/findWhere.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findWhere.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findWhere)\n/* harmony export */ });\n/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.js */ \"./node_modules/underscore/modules/find.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ \"./node_modules/underscore/modules/matcher.js\");\n\r\n\r\n\r\n// Convenience version of a common use case of `_.find`: getting the first\r\n// object containing specific `key:value` pairs.\r\nfunction findWhere(obj, attrs) {\r\n  return (0,_find_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, (0,_matcher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(attrs));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/findWhere.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/first.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/first.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ first)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./node_modules/underscore/modules/initial.js\");\n\r\n\r\n// Get the first element of an array. Passing **n** will return the first N\r\n// values in the array. The **guard** check allows it to work with `_.map`.\r\nfunction first(array, n, guard) {\r\n  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];\r\n  if (n == null || guard) return array[0];\r\n  return (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, array.length - n);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/first.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/flatten.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/flatten.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ flatten)\n/* harmony export */ });\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n\r\n\r\n// Flatten out an array, either recursively (by default), or up to `depth`.\r\n// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.\r\nfunction flatten(array, depth) {\r\n  return (0,_flatten_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, depth, false);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/flatten.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/functions.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/functions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ functions)\n/* harmony export */ });\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n\r\n\r\n// Return a sorted list of the function names available on the object.\r\nfunction functions(obj) {\r\n  var names = [];\r\n  for (var key in obj) {\r\n    if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj[key])) names.push(key);\r\n  }\r\n  return names.sort();\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/functions.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/get.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/get.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ get)\n/* harmony export */ });\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toPath.js */ \"./node_modules/underscore/modules/_toPath.js\");\n/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deepGet.js */ \"./node_modules/underscore/modules/_deepGet.js\");\n/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isUndefined.js */ \"./node_modules/underscore/modules/isUndefined.js\");\n\r\n\r\n\r\n\r\n// Get the value of the (deep) property on `path` from `object`.\r\n// If any property in `path` does not exist or if the value is\r\n// `undefined`, return `defaultValue` instead.\r\n// The `path` is normalized through `_.toPath`.\r\nfunction get(object, path, defaultValue) {\r\n  var value = (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object, (0,_toPath_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path));\r\n  return (0,_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(value) ? defaultValue : value;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/get.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/groupBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/groupBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ \"./node_modules/underscore/modules/_group.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n\r\n\r\n\r\n// Groups the object's values by a criterion. Pass either a string attribute\r\n// to group by, or a function that returns the criterion.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(result, value, key) {\r\n  if ((0,_has_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result, key)) result[key].push(value); else result[key] = [value];\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/groupBy.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/has.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/has.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ has)\n/* harmony export */ });\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ \"./node_modules/underscore/modules/_toPath.js\");\n\r\n\r\n\r\n// Shortcut function for checking if an object has a given property directly on\r\n// itself (in other words, not on a prototype). Unlike the internal `has`\r\n// function, this public version can also traverse nested properties.\r\nfunction has(obj, path) {\r\n  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path);\r\n  var length = path.length;\r\n  for (var i = 0; i < length; i++) {\r\n    var key = path[i];\r\n    if (!(0,_has_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, key)) return false;\r\n    obj = obj[key];\r\n  }\r\n  return !!length;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/has.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ identity)\n/* harmony export */ });\n// Keep the identity function around for default iteratees.\r\nfunction identity(value) {\r\n  return value;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/identity.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VERSION: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.VERSION),\n/* harmony export */   after: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.after),\n/* harmony export */   all: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.all),\n/* harmony export */   allKeys: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.allKeys),\n/* harmony export */   any: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.any),\n/* harmony export */   assign: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.assign),\n/* harmony export */   before: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.before),\n/* harmony export */   bind: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.bind),\n/* harmony export */   bindAll: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.bindAll),\n/* harmony export */   chain: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.chain),\n/* harmony export */   chunk: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.chunk),\n/* harmony export */   clone: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.clone),\n/* harmony export */   collect: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.collect),\n/* harmony export */   compact: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.compact),\n/* harmony export */   compose: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.compose),\n/* harmony export */   constant: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.constant),\n/* harmony export */   contains: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.contains),\n/* harmony export */   countBy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.countBy),\n/* harmony export */   create: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.create),\n/* harmony export */   debounce: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.debounce),\n/* harmony export */   \"default\": () => (/* reexport safe */ _index_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   defaults: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.defaults),\n/* harmony export */   defer: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.defer),\n/* harmony export */   delay: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.delay),\n/* harmony export */   detect: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.detect),\n/* harmony export */   difference: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.difference),\n/* harmony export */   drop: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.drop),\n/* harmony export */   each: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.each),\n/* harmony export */   escape: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.escape),\n/* harmony export */   every: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.every),\n/* harmony export */   extend: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.extend),\n/* harmony export */   extendOwn: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.extendOwn),\n/* harmony export */   filter: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.filter),\n/* harmony export */   find: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.find),\n/* harmony export */   findIndex: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findIndex),\n/* harmony export */   findKey: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findKey),\n/* harmony export */   findLastIndex: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findLastIndex),\n/* harmony export */   findWhere: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.findWhere),\n/* harmony export */   first: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.first),\n/* harmony export */   flatten: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.flatten),\n/* harmony export */   foldl: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.foldl),\n/* harmony export */   foldr: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.foldr),\n/* harmony export */   forEach: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.forEach),\n/* harmony export */   functions: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.functions),\n/* harmony export */   get: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.get),\n/* harmony export */   groupBy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.groupBy),\n/* harmony export */   has: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.has),\n/* harmony export */   head: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.head),\n/* harmony export */   identity: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.identity),\n/* harmony export */   include: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.include),\n/* harmony export */   includes: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.includes),\n/* harmony export */   indexBy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.indexBy),\n/* harmony export */   indexOf: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.indexOf),\n/* harmony export */   initial: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.initial),\n/* harmony export */   inject: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.inject),\n/* harmony export */   intersection: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.intersection),\n/* harmony export */   invert: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.invert),\n/* harmony export */   invoke: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.invoke),\n/* harmony export */   isArguments: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArguments),\n/* harmony export */   isArray: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArray),\n/* harmony export */   isArrayBuffer: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer),\n/* harmony export */   isBoolean: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isBoolean),\n/* harmony export */   isDataView: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isDataView),\n/* harmony export */   isDate: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isDate),\n/* harmony export */   isElement: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isElement),\n/* harmony export */   isEmpty: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty),\n/* harmony export */   isEqual: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isEqual),\n/* harmony export */   isError: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isError),\n/* harmony export */   isFinite: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isFinite),\n/* harmony export */   isFunction: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isFunction),\n/* harmony export */   isMap: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isMap),\n/* harmony export */   isMatch: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isMatch),\n/* harmony export */   isNaN: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNaN),\n/* harmony export */   isNull: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNull),\n/* harmony export */   isNumber: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isNumber),\n/* harmony export */   isObject: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isObject),\n/* harmony export */   isRegExp: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isRegExp),\n/* harmony export */   isSet: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isSet),\n/* harmony export */   isString: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isString),\n/* harmony export */   isSymbol: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isSymbol),\n/* harmony export */   isTypedArray: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isTypedArray),\n/* harmony export */   isUndefined: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined),\n/* harmony export */   isWeakMap: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isWeakMap),\n/* harmony export */   isWeakSet: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.isWeakSet),\n/* harmony export */   iteratee: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.iteratee),\n/* harmony export */   keys: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.keys),\n/* harmony export */   last: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.last),\n/* harmony export */   lastIndexOf: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.lastIndexOf),\n/* harmony export */   map: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.map),\n/* harmony export */   mapObject: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.mapObject),\n/* harmony export */   matcher: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.matcher),\n/* harmony export */   matches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.matches),\n/* harmony export */   max: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.max),\n/* harmony export */   memoize: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.memoize),\n/* harmony export */   methods: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.methods),\n/* harmony export */   min: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.min),\n/* harmony export */   mixin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.mixin),\n/* harmony export */   negate: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.negate),\n/* harmony export */   noop: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.noop),\n/* harmony export */   now: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.now),\n/* harmony export */   object: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.object),\n/* harmony export */   omit: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.omit),\n/* harmony export */   once: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.once),\n/* harmony export */   pairs: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pairs),\n/* harmony export */   partial: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.partial),\n/* harmony export */   partition: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.partition),\n/* harmony export */   pick: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pick),\n/* harmony export */   pluck: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.pluck),\n/* harmony export */   property: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.property),\n/* harmony export */   propertyOf: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.propertyOf),\n/* harmony export */   random: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.random),\n/* harmony export */   range: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.range),\n/* harmony export */   reduce: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reduce),\n/* harmony export */   reduceRight: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reduceRight),\n/* harmony export */   reject: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.reject),\n/* harmony export */   rest: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.rest),\n/* harmony export */   restArguments: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.restArguments),\n/* harmony export */   result: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.result),\n/* harmony export */   sample: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sample),\n/* harmony export */   select: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.select),\n/* harmony export */   shuffle: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.shuffle),\n/* harmony export */   size: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.size),\n/* harmony export */   some: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.some),\n/* harmony export */   sortBy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sortBy),\n/* harmony export */   sortedIndex: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.sortedIndex),\n/* harmony export */   tail: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.tail),\n/* harmony export */   take: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.take),\n/* harmony export */   tap: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.tap),\n/* harmony export */   template: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.template),\n/* harmony export */   templateSettings: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.templateSettings),\n/* harmony export */   throttle: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.throttle),\n/* harmony export */   times: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.times),\n/* harmony export */   toArray: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.toArray),\n/* harmony export */   toPath: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.toPath),\n/* harmony export */   transpose: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.transpose),\n/* harmony export */   unescape: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unescape),\n/* harmony export */   union: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.union),\n/* harmony export */   uniq: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.uniq),\n/* harmony export */   unique: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unique),\n/* harmony export */   uniqueId: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.uniqueId),\n/* harmony export */   unzip: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.unzip),\n/* harmony export */   values: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.values),\n/* harmony export */   where: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.where),\n/* harmony export */   without: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.without),\n/* harmony export */   wrap: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.wrap),\n/* harmony export */   zip: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.zip)\n/* harmony export */ });\n/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ \"./node_modules/underscore/modules/index-default.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./node_modules/underscore/modules/index.js\");\n// ESM Exports\r\n// ===========\r\n// This module is the package entry point for ES module users. In other words,\r\n// it is the module they are interfacing with when they import from the whole\r\n// package instead of from a submodule, like this:\r\n//\r\n// ```js\r\n// import { map } from 'underscore';\r\n// ```\r\n//\r\n// The difference with `./index-default`, which is the package entry point for\r\n// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and\r\n// default exports are considered to be siblings, so when you have a default\r\n// export, its properties are not automatically available as named exports. For\r\n// this reason, we re-export the named exports in addition to providing the same\r\n// default export as in `./index-default`.\r\n\r\n\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/index-all.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/underscore/modules/index.js\");\n// Default Export\r\n// ==============\r\n// In this module, we mix our bundled exports into the `_` object and export\r\n// the result. This is analogous to setting `module.exports = _` in CommonJS.\r\n// Hence, this module is also the entry point of our UMD bundle and the package\r\n// entry point for CommonJS and AMD users. In other words, this is (the source\r\n// of) the module you are interfacing with when you do any of the following:\r\n//\r\n// ```js\r\n// // CommonJS\r\n// var _ = require('underscore');\r\n//\r\n// // AMD\r\n// define(['underscore'], function(_) {...});\r\n//\r\n// // UMD in the browser\r\n// // _ is available as a global variable\r\n// ```\r\n\r\n\r\n\r\n// Add all of the Underscore functions to the wrapper object.\r\nvar _ = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.mixin)(_index_js__WEBPACK_IMPORTED_MODULE_0__);\r\n// Legacy Node.js API.\r\n_._ = _;\r\n// Export the Underscore API.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/index-default.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VERSION: () => (/* reexport safe */ _setup_js__WEBPACK_IMPORTED_MODULE_0__.VERSION),\n/* harmony export */   after: () => (/* reexport safe */ _after_js__WEBPACK_IMPORTED_MODULE_72__[\"default\"]),\n/* harmony export */   all: () => (/* reexport safe */ _every_js__WEBPACK_IMPORTED_MODULE_89__[\"default\"]),\n/* harmony export */   allKeys: () => (/* reexport safe */ _allKeys_js__WEBPACK_IMPORTED_MODULE_29__[\"default\"]),\n/* harmony export */   any: () => (/* reexport safe */ _some_js__WEBPACK_IMPORTED_MODULE_90__[\"default\"]),\n/* harmony export */   assign: () => (/* reexport safe */ _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__[\"default\"]),\n/* harmony export */   before: () => (/* reexport safe */ _before_js__WEBPACK_IMPORTED_MODULE_73__[\"default\"]),\n/* harmony export */   bind: () => (/* reexport safe */ _bind_js__WEBPACK_IMPORTED_MODULE_62__[\"default\"]),\n/* harmony export */   bindAll: () => (/* reexport safe */ _bindAll_js__WEBPACK_IMPORTED_MODULE_63__[\"default\"]),\n/* harmony export */   chain: () => (/* reexport safe */ _chain_js__WEBPACK_IMPORTED_MODULE_59__[\"default\"]),\n/* harmony export */   chunk: () => (/* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_123__[\"default\"]),\n/* harmony export */   clone: () => (/* reexport safe */ _clone_js__WEBPACK_IMPORTED_MODULE_38__[\"default\"]),\n/* harmony export */   collect: () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_84__[\"default\"]),\n/* harmony export */   compact: () => (/* reexport safe */ _compact_js__WEBPACK_IMPORTED_MODULE_112__[\"default\"]),\n/* harmony export */   compose: () => (/* reexport safe */ _compose_js__WEBPACK_IMPORTED_MODULE_71__[\"default\"]),\n/* harmony export */   constant: () => (/* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_44__[\"default\"]),\n/* harmony export */   contains: () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__[\"default\"]),\n/* harmony export */   countBy: () => (/* reexport safe */ _countBy_js__WEBPACK_IMPORTED_MODULE_102__[\"default\"]),\n/* harmony export */   create: () => (/* reexport safe */ _create_js__WEBPACK_IMPORTED_MODULE_37__[\"default\"]),\n/* harmony export */   debounce: () => (/* reexport safe */ _debounce_js__WEBPACK_IMPORTED_MODULE_68__[\"default\"]),\n/* harmony export */   \"default\": () => (/* reexport safe */ _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__[\"default\"]),\n/* harmony export */   defaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_36__[\"default\"]),\n/* harmony export */   defer: () => (/* reexport safe */ _defer_js__WEBPACK_IMPORTED_MODULE_66__[\"default\"]),\n/* harmony export */   delay: () => (/* reexport safe */ _delay_js__WEBPACK_IMPORTED_MODULE_65__[\"default\"]),\n/* harmony export */   detect: () => (/* reexport safe */ _find_js__WEBPACK_IMPORTED_MODULE_81__[\"default\"]),\n/* harmony export */   difference: () => (/* reexport safe */ _difference_js__WEBPACK_IMPORTED_MODULE_118__[\"default\"]),\n/* harmony export */   drop: () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__[\"default\"]),\n/* harmony export */   each: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_83__[\"default\"]),\n/* harmony export */   escape: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_53__[\"default\"]),\n/* harmony export */   every: () => (/* reexport safe */ _every_js__WEBPACK_IMPORTED_MODULE_89__[\"default\"]),\n/* harmony export */   extend: () => (/* reexport safe */ _extend_js__WEBPACK_IMPORTED_MODULE_34__[\"default\"]),\n/* harmony export */   extendOwn: () => (/* reexport safe */ _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__[\"default\"]),\n/* harmony export */   filter: () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_87__[\"default\"]),\n/* harmony export */   find: () => (/* reexport safe */ _find_js__WEBPACK_IMPORTED_MODULE_81__[\"default\"]),\n/* harmony export */   findIndex: () => (/* reexport safe */ _findIndex_js__WEBPACK_IMPORTED_MODULE_76__[\"default\"]),\n/* harmony export */   findKey: () => (/* reexport safe */ _findKey_js__WEBPACK_IMPORTED_MODULE_75__[\"default\"]),\n/* harmony export */   findLastIndex: () => (/* reexport safe */ _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__[\"default\"]),\n/* harmony export */   findWhere: () => (/* reexport safe */ _findWhere_js__WEBPACK_IMPORTED_MODULE_82__[\"default\"]),\n/* harmony export */   first: () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__[\"default\"]),\n/* harmony export */   flatten: () => (/* reexport safe */ _flatten_js__WEBPACK_IMPORTED_MODULE_113__[\"default\"]),\n/* harmony export */   foldl: () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__[\"default\"]),\n/* harmony export */   foldr: () => (/* reexport safe */ _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__[\"default\"]),\n/* harmony export */   forEach: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_83__[\"default\"]),\n/* harmony export */   functions: () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_33__[\"default\"]),\n/* harmony export */   get: () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_40__[\"default\"]),\n/* harmony export */   groupBy: () => (/* reexport safe */ _groupBy_js__WEBPACK_IMPORTED_MODULE_100__[\"default\"]),\n/* harmony export */   has: () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_41__[\"default\"]),\n/* harmony export */   head: () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__[\"default\"]),\n/* harmony export */   identity: () => (/* reexport safe */ _identity_js__WEBPACK_IMPORTED_MODULE_43__[\"default\"]),\n/* harmony export */   include: () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__[\"default\"]),\n/* harmony export */   includes: () => (/* reexport safe */ _contains_js__WEBPACK_IMPORTED_MODULE_91__[\"default\"]),\n/* harmony export */   indexBy: () => (/* reexport safe */ _indexBy_js__WEBPACK_IMPORTED_MODULE_101__[\"default\"]),\n/* harmony export */   indexOf: () => (/* reexport safe */ _indexOf_js__WEBPACK_IMPORTED_MODULE_79__[\"default\"]),\n/* harmony export */   initial: () => (/* reexport safe */ _initial_js__WEBPACK_IMPORTED_MODULE_109__[\"default\"]),\n/* harmony export */   inject: () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__[\"default\"]),\n/* harmony export */   intersection: () => (/* reexport safe */ _intersection_js__WEBPACK_IMPORTED_MODULE_117__[\"default\"]),\n/* harmony export */   invert: () => (/* reexport safe */ _invert_js__WEBPACK_IMPORTED_MODULE_32__[\"default\"]),\n/* harmony export */   invoke: () => (/* reexport safe */ _invoke_js__WEBPACK_IMPORTED_MODULE_92__[\"default\"]),\n/* harmony export */   isArguments: () => (/* reexport safe */ _isArguments_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]),\n/* harmony export */   isArray: () => (/* reexport safe */ _isArray_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   isArrayBuffer: () => (/* reexport safe */ _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   isBoolean: () => (/* reexport safe */ _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   isDataView: () => (/* reexport safe */ _isDataView_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   isDate: () => (/* reexport safe */ _isDate_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   isElement: () => (/* reexport safe */ _isElement_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   isEmpty: () => (/* reexport safe */ _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"]),\n/* harmony export */   isEqual: () => (/* reexport safe */ _isEqual_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"]),\n/* harmony export */   isError: () => (/* reexport safe */ _isError_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   isFinite: () => (/* reexport safe */ _isFinite_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n/* harmony export */   isFunction: () => (/* reexport safe */ _isFunction_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]),\n/* harmony export */   isMap: () => (/* reexport safe */ _isMap_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]),\n/* harmony export */   isMatch: () => (/* reexport safe */ _isMatch_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"]),\n/* harmony export */   isNaN: () => (/* reexport safe */ _isNaN_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]),\n/* harmony export */   isNull: () => (/* reexport safe */ _isNull_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   isNumber: () => (/* reexport safe */ _isNumber_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   isObject: () => (/* reexport safe */ _isObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   isRegExp: () => (/* reexport safe */ _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   isSet: () => (/* reexport safe */ _isSet_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"]),\n/* harmony export */   isString: () => (/* reexport safe */ _isString_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   isSymbol: () => (/* reexport safe */ _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   isTypedArray: () => (/* reexport safe */ _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"]),\n/* harmony export */   isUndefined: () => (/* reexport safe */ _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   isWeakMap: () => (/* reexport safe */ _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__[\"default\"]),\n/* harmony export */   isWeakSet: () => (/* reexport safe */ _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"]),\n/* harmony export */   iteratee: () => (/* reexport safe */ _iteratee_js__WEBPACK_IMPORTED_MODULE_60__[\"default\"]),\n/* harmony export */   keys: () => (/* reexport safe */ _keys_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"]),\n/* harmony export */   last: () => (/* reexport safe */ _last_js__WEBPACK_IMPORTED_MODULE_110__[\"default\"]),\n/* harmony export */   lastIndexOf: () => (/* reexport safe */ _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__[\"default\"]),\n/* harmony export */   map: () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_84__[\"default\"]),\n/* harmony export */   mapObject: () => (/* reexport safe */ _mapObject_js__WEBPACK_IMPORTED_MODULE_42__[\"default\"]),\n/* harmony export */   matcher: () => (/* reexport safe */ _matcher_js__WEBPACK_IMPORTED_MODULE_49__[\"default\"]),\n/* harmony export */   matches: () => (/* reexport safe */ _matcher_js__WEBPACK_IMPORTED_MODULE_49__[\"default\"]),\n/* harmony export */   max: () => (/* reexport safe */ _max_js__WEBPACK_IMPORTED_MODULE_95__[\"default\"]),\n/* harmony export */   memoize: () => (/* reexport safe */ _memoize_js__WEBPACK_IMPORTED_MODULE_64__[\"default\"]),\n/* harmony export */   methods: () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_33__[\"default\"]),\n/* harmony export */   min: () => (/* reexport safe */ _min_js__WEBPACK_IMPORTED_MODULE_96__[\"default\"]),\n/* harmony export */   mixin: () => (/* reexport safe */ _mixin_js__WEBPACK_IMPORTED_MODULE_124__[\"default\"]),\n/* harmony export */   negate: () => (/* reexport safe */ _negate_js__WEBPACK_IMPORTED_MODULE_70__[\"default\"]),\n/* harmony export */   noop: () => (/* reexport safe */ _noop_js__WEBPACK_IMPORTED_MODULE_45__[\"default\"]),\n/* harmony export */   now: () => (/* reexport safe */ _now_js__WEBPACK_IMPORTED_MODULE_52__[\"default\"]),\n/* harmony export */   object: () => (/* reexport safe */ _object_js__WEBPACK_IMPORTED_MODULE_121__[\"default\"]),\n/* harmony export */   omit: () => (/* reexport safe */ _omit_js__WEBPACK_IMPORTED_MODULE_107__[\"default\"]),\n/* harmony export */   once: () => (/* reexport safe */ _once_js__WEBPACK_IMPORTED_MODULE_74__[\"default\"]),\n/* harmony export */   pairs: () => (/* reexport safe */ _pairs_js__WEBPACK_IMPORTED_MODULE_31__[\"default\"]),\n/* harmony export */   partial: () => (/* reexport safe */ _partial_js__WEBPACK_IMPORTED_MODULE_61__[\"default\"]),\n/* harmony export */   partition: () => (/* reexport safe */ _partition_js__WEBPACK_IMPORTED_MODULE_103__[\"default\"]),\n/* harmony export */   pick: () => (/* reexport safe */ _pick_js__WEBPACK_IMPORTED_MODULE_106__[\"default\"]),\n/* harmony export */   pluck: () => (/* reexport safe */ _pluck_js__WEBPACK_IMPORTED_MODULE_93__[\"default\"]),\n/* harmony export */   property: () => (/* reexport safe */ _property_js__WEBPACK_IMPORTED_MODULE_47__[\"default\"]),\n/* harmony export */   propertyOf: () => (/* reexport safe */ _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__[\"default\"]),\n/* harmony export */   random: () => (/* reexport safe */ _random_js__WEBPACK_IMPORTED_MODULE_51__[\"default\"]),\n/* harmony export */   range: () => (/* reexport safe */ _range_js__WEBPACK_IMPORTED_MODULE_122__[\"default\"]),\n/* harmony export */   reduce: () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_85__[\"default\"]),\n/* harmony export */   reduceRight: () => (/* reexport safe */ _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__[\"default\"]),\n/* harmony export */   reject: () => (/* reexport safe */ _reject_js__WEBPACK_IMPORTED_MODULE_88__[\"default\"]),\n/* harmony export */   rest: () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__[\"default\"]),\n/* harmony export */   restArguments: () => (/* reexport safe */ _restArguments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   result: () => (/* reexport safe */ _result_js__WEBPACK_IMPORTED_MODULE_57__[\"default\"]),\n/* harmony export */   sample: () => (/* reexport safe */ _sample_js__WEBPACK_IMPORTED_MODULE_98__[\"default\"]),\n/* harmony export */   select: () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_87__[\"default\"]),\n/* harmony export */   shuffle: () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_97__[\"default\"]),\n/* harmony export */   size: () => (/* reexport safe */ _size_js__WEBPACK_IMPORTED_MODULE_105__[\"default\"]),\n/* harmony export */   some: () => (/* reexport safe */ _some_js__WEBPACK_IMPORTED_MODULE_90__[\"default\"]),\n/* harmony export */   sortBy: () => (/* reexport safe */ _sortBy_js__WEBPACK_IMPORTED_MODULE_99__[\"default\"]),\n/* harmony export */   sortedIndex: () => (/* reexport safe */ _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__[\"default\"]),\n/* harmony export */   tail: () => (/* reexport safe */ _rest_js__WEBPACK_IMPORTED_MODULE_111__[\"default\"]),\n/* harmony export */   take: () => (/* reexport safe */ _first_js__WEBPACK_IMPORTED_MODULE_108__[\"default\"]),\n/* harmony export */   tap: () => (/* reexport safe */ _tap_js__WEBPACK_IMPORTED_MODULE_39__[\"default\"]),\n/* harmony export */   template: () => (/* reexport safe */ _template_js__WEBPACK_IMPORTED_MODULE_56__[\"default\"]),\n/* harmony export */   templateSettings: () => (/* reexport safe */ _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__[\"default\"]),\n/* harmony export */   throttle: () => (/* reexport safe */ _throttle_js__WEBPACK_IMPORTED_MODULE_67__[\"default\"]),\n/* harmony export */   times: () => (/* reexport safe */ _times_js__WEBPACK_IMPORTED_MODULE_50__[\"default\"]),\n/* harmony export */   toArray: () => (/* reexport safe */ _toArray_js__WEBPACK_IMPORTED_MODULE_104__[\"default\"]),\n/* harmony export */   toPath: () => (/* reexport safe */ _toPath_js__WEBPACK_IMPORTED_MODULE_46__[\"default\"]),\n/* harmony export */   transpose: () => (/* reexport safe */ _unzip_js__WEBPACK_IMPORTED_MODULE_119__[\"default\"]),\n/* harmony export */   unescape: () => (/* reexport safe */ _unescape_js__WEBPACK_IMPORTED_MODULE_54__[\"default\"]),\n/* harmony export */   union: () => (/* reexport safe */ _union_js__WEBPACK_IMPORTED_MODULE_116__[\"default\"]),\n/* harmony export */   uniq: () => (/* reexport safe */ _uniq_js__WEBPACK_IMPORTED_MODULE_115__[\"default\"]),\n/* harmony export */   unique: () => (/* reexport safe */ _uniq_js__WEBPACK_IMPORTED_MODULE_115__[\"default\"]),\n/* harmony export */   uniqueId: () => (/* reexport safe */ _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__[\"default\"]),\n/* harmony export */   unzip: () => (/* reexport safe */ _unzip_js__WEBPACK_IMPORTED_MODULE_119__[\"default\"]),\n/* harmony export */   values: () => (/* reexport safe */ _values_js__WEBPACK_IMPORTED_MODULE_30__[\"default\"]),\n/* harmony export */   where: () => (/* reexport safe */ _where_js__WEBPACK_IMPORTED_MODULE_94__[\"default\"]),\n/* harmony export */   without: () => (/* reexport safe */ _without_js__WEBPACK_IMPORTED_MODULE_114__[\"default\"]),\n/* harmony export */   wrap: () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_69__[\"default\"]),\n/* harmony export */   zip: () => (/* reexport safe */ _zip_js__WEBPACK_IMPORTED_MODULE_120__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull.js */ \"./node_modules/underscore/modules/isNull.js\");\n/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined.js */ \"./node_modules/underscore/modules/isUndefined.js\");\n/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBoolean.js */ \"./node_modules/underscore/modules/isBoolean.js\");\n/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isElement.js */ \"./node_modules/underscore/modules/isElement.js\");\n/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isString.js */ \"./node_modules/underscore/modules/isString.js\");\n/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber.js */ \"./node_modules/underscore/modules/isNumber.js\");\n/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isDate.js */ \"./node_modules/underscore/modules/isDate.js\");\n/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp.js */ \"./node_modules/underscore/modules/isRegExp.js\");\n/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isError.js */ \"./node_modules/underscore/modules/isError.js\");\n/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isSymbol.js */ \"./node_modules/underscore/modules/isSymbol.js\");\n/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isArrayBuffer.js */ \"./node_modules/underscore/modules/isArrayBuffer.js\");\n/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isDataView.js */ \"./node_modules/underscore/modules/isDataView.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isArguments.js */ \"./node_modules/underscore/modules/isArguments.js\");\n/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isFinite.js */ \"./node_modules/underscore/modules/isFinite.js\");\n/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isNaN.js */ \"./node_modules/underscore/modules/isNaN.js\");\n/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isTypedArray.js */ \"./node_modules/underscore/modules/isTypedArray.js\");\n/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isEmpty.js */ \"./node_modules/underscore/modules/isEmpty.js\");\n/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isMatch.js */ \"./node_modules/underscore/modules/isMatch.js\");\n/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isEqual.js */ \"./node_modules/underscore/modules/isEqual.js\");\n/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isMap.js */ \"./node_modules/underscore/modules/isMap.js\");\n/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isWeakMap.js */ \"./node_modules/underscore/modules/isWeakMap.js\");\n/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isSet.js */ \"./node_modules/underscore/modules/isSet.js\");\n/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isWeakSet.js */ \"./node_modules/underscore/modules/isWeakSet.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allKeys.js */ \"./node_modules/underscore/modules/allKeys.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pairs.js */ \"./node_modules/underscore/modules/pairs.js\");\n/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invert.js */ \"./node_modules/underscore/modules/invert.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./functions.js */ \"./node_modules/underscore/modules/functions.js\");\n/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./extend.js */ \"./node_modules/underscore/modules/extend.js\");\n/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./extendOwn.js */ \"./node_modules/underscore/modules/extendOwn.js\");\n/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./defaults.js */ \"./node_modules/underscore/modules/defaults.js\");\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create.js */ \"./node_modules/underscore/modules/create.js\");\n/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./clone.js */ \"./node_modules/underscore/modules/clone.js\");\n/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tap.js */ \"./node_modules/underscore/modules/tap.js\");\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./get.js */ \"./node_modules/underscore/modules/get.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./has.js */ \"./node_modules/underscore/modules/has.js\");\n/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mapObject.js */ \"./node_modules/underscore/modules/mapObject.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/underscore/modules/identity.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/underscore/modules/constant.js\");\n/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./noop.js */ \"./node_modules/underscore/modules/noop.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./toPath.js */ \"./node_modules/underscore/modules/toPath.js\");\n/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./property.js */ \"./node_modules/underscore/modules/property.js\");\n/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./propertyOf.js */ \"./node_modules/underscore/modules/propertyOf.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./matcher.js */ \"./node_modules/underscore/modules/matcher.js\");\n/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./times.js */ \"./node_modules/underscore/modules/times.js\");\n/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./random.js */ \"./node_modules/underscore/modules/random.js\");\n/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./now.js */ \"./node_modules/underscore/modules/now.js\");\n/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./escape.js */ \"./node_modules/underscore/modules/escape.js\");\n/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./unescape.js */ \"./node_modules/underscore/modules/unescape.js\");\n/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./templateSettings.js */ \"./node_modules/underscore/modules/templateSettings.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./template.js */ \"./node_modules/underscore/modules/template.js\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./result.js */ \"./node_modules/underscore/modules/result.js\");\n/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./uniqueId.js */ \"./node_modules/underscore/modules/uniqueId.js\");\n/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chain.js */ \"./node_modules/underscore/modules/chain.js\");\n/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./iteratee.js */ \"./node_modules/underscore/modules/iteratee.js\");\n/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./partial.js */ \"./node_modules/underscore/modules/partial.js\");\n/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./bind.js */ \"./node_modules/underscore/modules/bind.js\");\n/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./bindAll.js */ \"./node_modules/underscore/modules/bindAll.js\");\n/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./memoize.js */ \"./node_modules/underscore/modules/memoize.js\");\n/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./delay.js */ \"./node_modules/underscore/modules/delay.js\");\n/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./defer.js */ \"./node_modules/underscore/modules/defer.js\");\n/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./throttle.js */ \"./node_modules/underscore/modules/throttle.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./debounce.js */ \"./node_modules/underscore/modules/debounce.js\");\n/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./wrap.js */ \"./node_modules/underscore/modules/wrap.js\");\n/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./negate.js */ \"./node_modules/underscore/modules/negate.js\");\n/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./compose.js */ \"./node_modules/underscore/modules/compose.js\");\n/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./after.js */ \"./node_modules/underscore/modules/after.js\");\n/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./before.js */ \"./node_modules/underscore/modules/before.js\");\n/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./once.js */ \"./node_modules/underscore/modules/once.js\");\n/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./findKey.js */ \"./node_modules/underscore/modules/findKey.js\");\n/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./findIndex.js */ \"./node_modules/underscore/modules/findIndex.js\");\n/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./findLastIndex.js */ \"./node_modules/underscore/modules/findLastIndex.js\");\n/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./sortedIndex.js */ \"./node_modules/underscore/modules/sortedIndex.js\");\n/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./indexOf.js */ \"./node_modules/underscore/modules/indexOf.js\");\n/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./lastIndexOf.js */ \"./node_modules/underscore/modules/lastIndexOf.js\");\n/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./find.js */ \"./node_modules/underscore/modules/find.js\");\n/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./findWhere.js */ \"./node_modules/underscore/modules/findWhere.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./reduce.js */ \"./node_modules/underscore/modules/reduce.js\");\n/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./reduceRight.js */ \"./node_modules/underscore/modules/reduceRight.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/underscore/modules/filter.js\");\n/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./reject.js */ \"./node_modules/underscore/modules/reject.js\");\n/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./every.js */ \"./node_modules/underscore/modules/every.js\");\n/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./some.js */ \"./node_modules/underscore/modules/some.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/underscore/modules/contains.js\");\n/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./invoke.js */ \"./node_modules/underscore/modules/invoke.js\");\n/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./pluck.js */ \"./node_modules/underscore/modules/pluck.js\");\n/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./where.js */ \"./node_modules/underscore/modules/where.js\");\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./max.js */ \"./node_modules/underscore/modules/max.js\");\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./min.js */ \"./node_modules/underscore/modules/min.js\");\n/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./shuffle.js */ \"./node_modules/underscore/modules/shuffle.js\");\n/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./sample.js */ \"./node_modules/underscore/modules/sample.js\");\n/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./sortBy.js */ \"./node_modules/underscore/modules/sortBy.js\");\n/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./groupBy.js */ \"./node_modules/underscore/modules/groupBy.js\");\n/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./indexBy.js */ \"./node_modules/underscore/modules/indexBy.js\");\n/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./countBy.js */ \"./node_modules/underscore/modules/countBy.js\");\n/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./partition.js */ \"./node_modules/underscore/modules/partition.js\");\n/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./toArray.js */ \"./node_modules/underscore/modules/toArray.js\");\n/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./size.js */ \"./node_modules/underscore/modules/size.js\");\n/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./pick.js */ \"./node_modules/underscore/modules/pick.js\");\n/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./omit.js */ \"./node_modules/underscore/modules/omit.js\");\n/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./first.js */ \"./node_modules/underscore/modules/first.js\");\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./initial.js */ \"./node_modules/underscore/modules/initial.js\");\n/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./last.js */ \"./node_modules/underscore/modules/last.js\");\n/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./rest.js */ \"./node_modules/underscore/modules/rest.js\");\n/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./compact.js */ \"./node_modules/underscore/modules/compact.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./flatten.js */ \"./node_modules/underscore/modules/flatten.js\");\n/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./without.js */ \"./node_modules/underscore/modules/without.js\");\n/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./uniq.js */ \"./node_modules/underscore/modules/uniq.js\");\n/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./union.js */ \"./node_modules/underscore/modules/union.js\");\n/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./intersection.js */ \"./node_modules/underscore/modules/intersection.js\");\n/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./difference.js */ \"./node_modules/underscore/modules/difference.js\");\n/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./unzip.js */ \"./node_modules/underscore/modules/unzip.js\");\n/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./zip.js */ \"./node_modules/underscore/modules/zip.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./object.js */ \"./node_modules/underscore/modules/object.js\");\n/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./range.js */ \"./node_modules/underscore/modules/range.js\");\n/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./chunk.js */ \"./node_modules/underscore/modules/chunk.js\");\n/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./mixin.js */ \"./node_modules/underscore/modules/mixin.js\");\n/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./underscore-array-methods.js */ \"./node_modules/underscore/modules/underscore-array-methods.js\");\n// Named Exports\r\n// =============\r\n\r\n//     Underscore.js 1.13.6\r\n//     https://underscorejs.org\r\n//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors\r\n//     Underscore may be freely distributed under the MIT license.\r\n\r\n// Baseline setup.\r\n\r\n\r\n\r\n// Object Functions\r\n// ----------------\r\n// Our most fundamental functions operate on any JavaScript object.\r\n// Most functions in Underscore depend on at least one function in this section.\r\n\r\n// A group of functions that check the types of core JavaScript values.\r\n// These are often informally referred to as the \"isType\" functions.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Functions that treat an object as a dictionary of key-value pairs.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Utility Functions\r\n// -----------------\r\n// A bit of a grab bag: Predicate-generating functions for use with filters and\r\n// loops, string escaping and templating, create random numbers and unique ids,\r\n// and functions that facilitate Underscore's chaining and iteration conventions.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Function (ahem) Functions\r\n// -------------------------\r\n// These functions take a function as an argument and return a new function\r\n// as the result. Also known as higher-order functions.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Finders\r\n// -------\r\n// Functions that extract (the position of) a single element from an object\r\n// or array based on some criterion.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Collection Functions\r\n// --------------------\r\n// Functions that work on any collection of elements: either an array, or\r\n// an object of key-value pairs.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// `_.pick` and `_.omit` are actually object functions, but we put\r\n// them here in order to create a more natural reading order in the\r\n// monolithic build as they depend on `_.contains`.\r\n\r\n\r\n\r\n// Array Functions\r\n// ---------------\r\n// Functions that operate on arrays (and array-likes) only, because they’re\r\n// expressed in terms of operations on an ordered list of values.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// OOP\r\n// ---\r\n// These modules support the \"object-oriented\" calling style. See also\r\n// `underscore.js` and `index-default.js`.\r\n\r\n\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/index.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/indexBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexBy.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ \"./node_modules/underscore/modules/_group.js\");\n\r\n\r\n// Indexes the object's values by a criterion, similar to `_.groupBy`, but for\r\n// when you know that your index values will be unique.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(result, value, key) {\r\n  result[key] = value;\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/indexBy.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexOf.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortedIndex.js */ \"./node_modules/underscore/modules/sortedIndex.js\");\n/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ \"./node_modules/underscore/modules/findIndex.js\");\n/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createIndexFinder.js */ \"./node_modules/underscore/modules/_createIndexFinder.js\");\n\r\n\r\n\r\n\r\n// Return the position of the first occurrence of an item in an array,\r\n// or -1 if the item is not included in the array.\r\n// If the array is large and already in sort order, pass `true`\r\n// for **isSorted** to use binary search.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/indexOf.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/initial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/initial.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initial)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Returns everything but the last entry of the array. Especially useful on\r\n// the arguments object. Passing **n** will return all the values in\r\n// the array, excluding the last N.\r\nfunction initial(array, n, guard) {\r\n  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/initial.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/intersection.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/intersection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intersection)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/underscore/modules/contains.js\");\n\r\n\r\n\r\n// Produce an array that contains every item shared between all the\r\n// passed-in arrays.\r\nfunction intersection(array) {\r\n  var result = [];\r\n  var argsLength = arguments.length;\r\n  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array); i < length; i++) {\r\n    var item = array[i];\r\n    if ((0,_contains_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result, item)) continue;\r\n    var j;\r\n    for (j = 1; j < argsLength; j++) {\r\n      if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arguments[j], item)) break;\r\n    }\r\n    if (j === argsLength) result.push(item);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/intersection.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/invert.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invert.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ invert)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n// Invert the keys and values of an object. The values must be serializable.\r\nfunction invert(obj) {\r\n  var result = {};\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  for (var i = 0, length = _keys.length; i < length; i++) {\r\n    result[obj[_keys[i]]] = _keys[i];\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/invert.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/invoke.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invoke.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_deepGet.js */ \"./node_modules/underscore/modules/_deepGet.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_toPath.js */ \"./node_modules/underscore/modules/_toPath.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Invoke a method (with arguments) on every item in a collection.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj, path, args) {\r\n  var contextPath, func;\r\n  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path)) {\r\n    func = path;\r\n  } else {\r\n    path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path);\r\n    contextPath = path.slice(0, -1);\r\n    path = path[path.length - 1];\r\n  }\r\n  return (0,_map_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, function(context) {\r\n    var method = func;\r\n    if (!method) {\r\n      if (contextPath && contextPath.length) {\r\n        context = (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(context, contextPath);\r\n      }\r\n      if (context == null) return void 0;\r\n      method = context[path];\r\n    }\r\n    return method == null ? method : method.apply(context, args);\r\n  });\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/invoke.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isArguments.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n\r\n\r\n\r\nvar isArguments = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Arguments');\r\n\r\n// Define a fallback version of the method in browsers (ahem, IE < 9), where\r\n// there isn't any inspectable \"Arguments\" type.\r\n(function() {\r\n  if (!isArguments(arguments)) {\r\n    isArguments = function(obj) {\r\n      return (0,_has_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, 'callee');\r\n    };\r\n  }\r\n}());\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isArguments.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n\r\n// Is a given value an array?\r\n// Delegates to ECMA5's native `Array.isArray`.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsArray || (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Array'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isArray.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isArrayBuffer.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/isArrayBuffer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ArrayBuffer'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isBoolean.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isBoolean.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isBoolean)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Is a given value a boolean?\r\nfunction isBoolean(obj) {\r\n  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj) === '[object Boolean]';\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isBoolean.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isDataView.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isDataView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayBuffer.js */ \"./node_modules/underscore/modules/isArrayBuffer.js\");\n/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringTagBug.js */ \"./node_modules/underscore/modules/_stringTagBug.js\");\n\r\n\r\n\r\n\r\n\r\nvar isDataView = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('DataView');\r\n\r\n// In IE 10 - Edge 13, we need a different heuristic\r\n// to determine whether an object is a `DataView`.\r\nfunction ie10IsDataView(obj) {\r\n  return obj != null && (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj.getInt8) && (0,_isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj.buffer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__.hasStringTagBug ? ie10IsDataView : isDataView);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isDataView.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isDate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isDate.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Date'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isDate.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isElement.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isElement.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isElement)\n/* harmony export */ });\n// Is a given value a DOM element?\r\nfunction isElement(obj) {\r\n  return !!(obj && obj.nodeType === 1);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isElement.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isEmpty.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEmpty.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isEmpty)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ \"./node_modules/underscore/modules/isString.js\");\n/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ \"./node_modules/underscore/modules/isArguments.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Is a given array, string, or object empty?\r\n// An \"empty\" object has no enumerable own-properties.\r\nfunction isEmpty(obj) {\r\n  if (obj == null) return true;\r\n  // Skip the more expensive `toString`-based type checks if `obj` has no\r\n  // `.length`.\r\n  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  if (typeof length == 'number' && (\r\n    (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) || (0,_isString_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)\r\n  )) return length === 0;\r\n  return (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_keys_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(obj)) === 0;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isEmpty.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isEqual.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEqual.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isEqual)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getByteLength.js */ \"./node_modules/underscore/modules/_getByteLength.js\");\n/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ \"./node_modules/underscore/modules/isTypedArray.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stringTagBug.js */ \"./node_modules/underscore/modules/_stringTagBug.js\");\n/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isDataView.js */ \"./node_modules/underscore/modules/isDataView.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n/* harmony import */ var _toBufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_toBufferView.js */ \"./node_modules/underscore/modules/_toBufferView.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// We use this string twice, so give it a name for minification.\r\nvar tagDataView = '[object DataView]';\r\n\r\n// Internal recursive comparison function for `_.isEqual`.\r\nfunction eq(a, b, aStack, bStack) {\r\n  // Identical objects are equal. `0 === -0`, but they aren't identical.\r\n  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).\r\n  if (a === b) return a !== 0 || 1 / a === 1 / b;\r\n  // `null` or `undefined` only equal to itself (strict comparison).\r\n  if (a == null || b == null) return false;\r\n  // `NaN`s are equivalent, but non-reflexive.\r\n  if (a !== a) return b !== b;\r\n  // Exhaust primitive checks\r\n  var type = typeof a;\r\n  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;\r\n  return deepEq(a, b, aStack, bStack);\r\n}\r\n\r\n// Internal recursive comparison function for `_.isEqual`.\r\nfunction deepEq(a, b, aStack, bStack) {\r\n  // Unwrap any wrapped objects.\r\n  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) a = a._wrapped;\r\n  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) b = b._wrapped;\r\n  // Compare `[[Class]]` names.\r\n  var className = _setup_js__WEBPACK_IMPORTED_MODULE_1__.toString.call(a);\r\n  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_1__.toString.call(b)) return false;\r\n  // Work around a bug in IE 10 - Edge 13.\r\n  if (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__.hasStringTagBug && className == '[object Object]' && (0,_isDataView_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a)) {\r\n    if (!(0,_isDataView_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(b)) return false;\r\n    className = tagDataView;\r\n  }\r\n  switch (className) {\r\n    // These types are compared by value.\r\n    case '[object RegExp]':\r\n      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')\r\n    case '[object String]':\r\n      // Primitives and their corresponding object wrappers are equivalent; thus, `\"5\"` is\r\n      // equivalent to `new String(\"5\")`.\r\n      return '' + a === '' + b;\r\n    case '[object Number]':\r\n      // `NaN`s are equivalent, but non-reflexive.\r\n      // Object(NaN) is equivalent to NaN.\r\n      if (+a !== +a) return +b !== +b;\r\n      // An `egal` comparison is performed for other numeric values.\r\n      return +a === 0 ? 1 / +a === 1 / b : +a === +b;\r\n    case '[object Date]':\r\n    case '[object Boolean]':\r\n      // Coerce dates and booleans to numeric primitive values. Dates are compared by their\r\n      // millisecond representations. Note that invalid dates with millisecond representations\r\n      // of `NaN` are not equivalent.\r\n      return +a === +b;\r\n    case '[object Symbol]':\r\n      return _setup_js__WEBPACK_IMPORTED_MODULE_1__.SymbolProto.valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_1__.SymbolProto.valueOf.call(b);\r\n    case '[object ArrayBuffer]':\r\n    case tagDataView:\r\n      // Coerce to typed array so we can fall through.\r\n      return deepEq((0,_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(a), (0,_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(b), aStack, bStack);\r\n  }\r\n\r\n  var areArrays = className === '[object Array]';\r\n  if (!areArrays && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a)) {\r\n      var byteLength = (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a);\r\n      if (byteLength !== (0,_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b)) return false;\r\n      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;\r\n      areArrays = true;\r\n  }\r\n  if (!areArrays) {\r\n    if (typeof a != 'object' || typeof b != 'object') return false;\r\n\r\n    // Objects with different constructors are not equivalent, but `Object`s or `Array`s\r\n    // from different frames are.\r\n    var aCtor = a.constructor, bCtor = b.constructor;\r\n    if (aCtor !== bCtor && !((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(aCtor) && aCtor instanceof aCtor &&\r\n                             (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bCtor) && bCtor instanceof bCtor)\r\n                        && ('constructor' in a && 'constructor' in b)) {\r\n      return false;\r\n    }\r\n  }\r\n  // Assume equality for cyclic structures. The algorithm for detecting cyclic\r\n  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.\r\n\r\n  // Initializing stack of traversed objects.\r\n  // It's done here since we only need them for objects and arrays comparison.\r\n  aStack = aStack || [];\r\n  bStack = bStack || [];\r\n  var length = aStack.length;\r\n  while (length--) {\r\n    // Linear search. Performance is inversely proportional to the number of\r\n    // unique nested structures.\r\n    if (aStack[length] === a) return bStack[length] === b;\r\n  }\r\n\r\n  // Add the first object to the stack of traversed objects.\r\n  aStack.push(a);\r\n  bStack.push(b);\r\n\r\n  // Recursively compare objects and arrays.\r\n  if (areArrays) {\r\n    // Compare array lengths to determine if a deep comparison is necessary.\r\n    length = a.length;\r\n    if (length !== b.length) return false;\r\n    // Deep compare the contents, ignoring non-numeric properties.\r\n    while (length--) {\r\n      if (!eq(a[length], b[length], aStack, bStack)) return false;\r\n    }\r\n  } else {\r\n    // Deep compare objects.\r\n    var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(a), key;\r\n    length = _keys.length;\r\n    // Ensure that both objects contain the same number of properties before comparing deep equality.\r\n    if ((0,_keys_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(b).length !== length) return false;\r\n    while (length--) {\r\n      // Deep compare each member\r\n      key = _keys[length];\r\n      if (!((0,_has_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;\r\n    }\r\n  }\r\n  // Remove the first object from the stack of traversed objects.\r\n  aStack.pop();\r\n  bStack.pop();\r\n  return true;\r\n}\r\n\r\n// Perform a deep comparison to check if two objects are equal.\r\nfunction isEqual(a, b) {\r\n  return eq(a, b);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isEqual.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isError.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isError.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Error'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isError.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isFinite.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isFinite.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isFinite)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ \"./node_modules/underscore/modules/isSymbol.js\");\n\r\n\r\n\r\n// Is a given object a finite number?\r\nfunction isFinite(obj) {\r\n  return !(0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) && (0,_setup_js__WEBPACK_IMPORTED_MODULE_0__._isFinite)(obj) && !isNaN(parseFloat(obj));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isFinite.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n\r\nvar isFunction = (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Function');\r\n\r\n// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old\r\n// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).\r\nvar nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_1__.root.document && _setup_js__WEBPACK_IMPORTED_MODULE_1__.root.document.childNodes;\r\nif ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {\r\n  isFunction = function(obj) {\r\n    return typeof obj == 'function' || false;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isFunction.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isMap.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isMap.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ \"./node_modules/underscore/modules/_stringTagBug.js\");\n/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ \"./node_modules/underscore/modules/_methodFingerprint.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.mapMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Map'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isMap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isMatch.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isMatch.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isMatch)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n// Returns whether an object has a given set of `key:value` pairs.\r\nfunction isMatch(object, attrs) {\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(attrs), length = _keys.length;\r\n  if (object == null) return !length;\r\n  var obj = Object(object);\r\n  for (var i = 0; i < length; i++) {\r\n    var key = _keys[i];\r\n    if (attrs[key] !== obj[key] || !(key in obj)) return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isMatch.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isNaN.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isNaN.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isNaN)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber.js */ \"./node_modules/underscore/modules/isNumber.js\");\n\r\n\r\n\r\n// Is the given value `NaN`?\r\nfunction isNaN(obj) {\r\n  return (0,_isNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) && (0,_setup_js__WEBPACK_IMPORTED_MODULE_0__._isNaN)(obj);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isNaN.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isNull.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isNull.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isNull)\n/* harmony export */ });\n// Is a given value equal to null?\r\nfunction isNull(obj) {\r\n  return obj === null;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isNull.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isNumber.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Number'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isNumber.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isObject)\n/* harmony export */ });\n// Is a given variable an object?\r\nfunction isObject(obj) {\r\n  var type = typeof obj;\r\n  return type === 'function' || (type === 'object' && !!obj);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isObject.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isRegExp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('RegExp'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isRegExp.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isSet.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isSet.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ \"./node_modules/underscore/modules/_stringTagBug.js\");\n/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ \"./node_modules/underscore/modules/_methodFingerprint.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.setMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Set'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isSet.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isString.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('String'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isString.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isSymbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isSymbol.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Symbol'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isSymbol.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isTypedArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/isTypedArray.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDataView.js */ \"./node_modules/underscore/modules/isDataView.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/underscore/modules/constant.js\");\n/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isBufferLike.js */ \"./node_modules/underscore/modules/_isBufferLike.js\");\n\r\n\r\n\r\n\r\n\r\n// Is a given value a typed array?\r\nvar typedArrayPattern = /\\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\\]/;\r\nfunction isTypedArray(obj) {\r\n  // `ArrayBuffer.isView` is the most future-proof, so use it when available.\r\n  // Otherwise, fall back on the above regular expression.\r\n  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsView ? ((0,_setup_js__WEBPACK_IMPORTED_MODULE_0__.nativeIsView)(obj) && !(0,_isDataView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj)) :\r\n                (0,_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__.toString.call(obj));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_setup_js__WEBPACK_IMPORTED_MODULE_0__.supportsArrayBuffer ? isTypedArray : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(false));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isUndefined.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isUndefined.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUndefined)\n/* harmony export */ });\n// Is a given variable undefined?\r\nfunction isUndefined(obj) {\r\n  return obj === void 0;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isUndefined.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isWeakMap.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakMap.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ \"./node_modules/underscore/modules/_stringTagBug.js\");\n/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ \"./node_modules/underscore/modules/_methodFingerprint.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__.isIE11 ? (0,_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.ie11fingerprint)(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__.weakMapMethods) : (0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('WeakMap'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isWeakMap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/isWeakSet.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakSet.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ \"./node_modules/underscore/modules/_tagTester.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('WeakSet'));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/isWeakSet.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/iteratee.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/iteratee.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iteratee)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ \"./node_modules/underscore/modules/_baseIteratee.js\");\n\r\n\r\n\r\n// External wrapper for our callback generator. Users may customize\r\n// `_.iteratee` if they want additional predicate/iteratee shorthand styles.\r\n// This abstraction hides the internal-only `argCount` argument.\r\nfunction iteratee(value, context) {\r\n  return (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, context, Infinity);\r\n}\r\n_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iteratee = iteratee;\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/iteratee.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/keys.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/keys.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ keys)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./node_modules/underscore/modules/isObject.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ \"./node_modules/underscore/modules/_collectNonEnumProps.js\");\n\r\n\r\n\r\n\r\n\r\n// Retrieve the names of an object's own properties.\r\n// Delegates to **ECMAScript 5**'s native `Object.keys`.\r\nfunction keys(obj) {\r\n  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) return [];\r\n  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeKeys) return (0,_setup_js__WEBPACK_IMPORTED_MODULE_1__.nativeKeys)(obj);\r\n  var keys = [];\r\n  for (var key in obj) if ((0,_has_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, key)) keys.push(key);\r\n  // Ahem, IE < 9.\r\n  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__.hasEnumBug) (0,_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj, keys);\r\n  return keys;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/keys.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/last.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/last.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ last)\n/* harmony export */ });\n/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.js */ \"./node_modules/underscore/modules/rest.js\");\n\r\n\r\n// Get the last element of an array. Passing **n** will return the last N\r\n// values in the array.\r\nfunction last(array, n, guard) {\r\n  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];\r\n  if (n == null || guard) return array[array.length - 1];\r\n  return (0,_rest_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, Math.max(0, array.length - n));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/last.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/lastIndexOf.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/lastIndexOf.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLastIndex.js */ \"./node_modules/underscore/modules/findLastIndex.js\");\n/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createIndexFinder.js */ \"./node_modules/underscore/modules/_createIndexFinder.js\");\n\r\n\r\n\r\n// Return the position of the last occurrence of an item in an array,\r\n// or -1 if the item is not included in the array.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/lastIndexOf.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/map.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/map.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ map)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n\r\n// Return the results of applying the iteratee to each element.\r\nfunction map(obj, iteratee, context) {\r\n  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context);\r\n  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj),\r\n      length = (_keys || obj).length,\r\n      results = Array(length);\r\n  for (var index = 0; index < length; index++) {\r\n    var currentKey = _keys ? _keys[index] : index;\r\n    results[index] = iteratee(obj[currentKey], currentKey, obj);\r\n  }\r\n  return results;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/map.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/mapObject.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/mapObject.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mapObject)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n// Returns the results of applying the `iteratee` to each element of `obj`.\r\n// In contrast to `_.map` it returns an object.\r\nfunction mapObject(obj, iteratee, context) {\r\n  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context);\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj),\r\n      length = _keys.length,\r\n      results = {};\r\n  for (var index = 0; index < length; index++) {\r\n    var currentKey = _keys[index];\r\n    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);\r\n  }\r\n  return results;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/mapObject.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/matcher.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/matcher.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ matcher)\n/* harmony export */ });\n/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendOwn.js */ \"./node_modules/underscore/modules/extendOwn.js\");\n/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMatch.js */ \"./node_modules/underscore/modules/isMatch.js\");\n\r\n\r\n\r\n// Returns a predicate for checking whether an object has a given set of\r\n// `key:value` pairs.\r\nfunction matcher(attrs) {\r\n  attrs = (0,_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, attrs);\r\n  return function(obj) {\r\n    return (0,_isMatch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, attrs);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/matcher.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/max.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/max.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ max)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n\r\n\r\n\r\n\r\n\r\n// Return the maximum element (or element-based computation).\r\nfunction max(obj, iteratee, context) {\r\n  var result = -Infinity, lastComputed = -Infinity,\r\n      value, computed;\r\n  if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null)) {\r\n    obj = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) ? obj : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\r\n    for (var i = 0, length = obj.length; i < length; i++) {\r\n      value = obj[i];\r\n      if (value != null && value > result) {\r\n        result = value;\r\n      }\r\n    }\r\n  } else {\r\n    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(iteratee, context);\r\n    (0,_each_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj, function(v, index, list) {\r\n      computed = iteratee(v, index, list);\r\n      if (computed > lastComputed || (computed === -Infinity && result === -Infinity)) {\r\n        result = v;\r\n        lastComputed = computed;\r\n      }\r\n    });\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/max.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/memoize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/memoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ memoize)\n/* harmony export */ });\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ \"./node_modules/underscore/modules/_has.js\");\n\r\n\r\n// Memoize an expensive function by storing its results.\r\nfunction memoize(func, hasher) {\r\n  var memoize = function(key) {\r\n    var cache = memoize.cache;\r\n    var address = '' + (hasher ? hasher.apply(this, arguments) : key);\r\n    if (!(0,_has_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cache, address)) cache[address] = func.apply(this, arguments);\r\n    return cache[address];\r\n  };\r\n  memoize.cache = {};\r\n  return memoize;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/memoize.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/min.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/min.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ min)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n\r\n\r\n\r\n\r\n\r\n// Return the minimum element (or element-based computation).\r\nfunction min(obj, iteratee, context) {\r\n  var result = Infinity, lastComputed = Infinity,\r\n      value, computed;\r\n  if (iteratee == null || (typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null)) {\r\n    obj = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) ? obj : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\r\n    for (var i = 0, length = obj.length; i < length; i++) {\r\n      value = obj[i];\r\n      if (value != null && value < result) {\r\n        result = value;\r\n      }\r\n    }\r\n  } else {\r\n    iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(iteratee, context);\r\n    (0,_each_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj, function(v, index, list) {\r\n      computed = iteratee(v, index, list);\r\n      if (computed < lastComputed || (computed === Infinity && result === Infinity)) {\r\n        result = v;\r\n        lastComputed = computed;\r\n      }\r\n    });\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/min.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/mixin.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/mixin.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mixin)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ \"./node_modules/underscore/modules/functions.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chainResult.js */ \"./node_modules/underscore/modules/_chainResult.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Add your own custom functions to the Underscore object.\r\nfunction mixin(obj) {\r\n  (0,_each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_functions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj), function(name) {\r\n    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] = obj[name];\r\n    _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype[name] = function() {\r\n      var args = [this._wrapped];\r\n      _setup_js__WEBPACK_IMPORTED_MODULE_3__.push.apply(args, arguments);\r\n      return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], args));\r\n    };\r\n  });\r\n  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/mixin.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/negate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/negate.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ negate)\n/* harmony export */ });\n// Returns a negated version of the passed-in predicate.\r\nfunction negate(predicate) {\r\n  return function() {\r\n    return !predicate.apply(this, arguments);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/negate.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/noop.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ noop)\n/* harmony export */ });\n// Predicate-generating function. Often useful outside of Underscore.\r\nfunction noop(){}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/noop.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/now.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/now.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// A (possibly faster) way to get the current timestamp as an integer.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Date.now || function() {\r\n  return new Date().getTime();\r\n});\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/now.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/object.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ object)\n/* harmony export */ });\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n\r\n\r\n// Converts lists into objects. Pass either a single array of `[key, value]`\r\n// pairs, or two parallel arrays of the same length -- one of keys, and one of\r\n// the corresponding values. Passing by pairs is the reverse of `_.pairs`.\r\nfunction object(list, values) {\r\n  var result = {};\r\n  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list); i < length; i++) {\r\n    if (values) {\r\n      result[list[i]] = values[i];\r\n    } else {\r\n      result[list[i][0]] = list[i][1];\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/object.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/omit.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/omit.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negate.js */ \"./node_modules/underscore/modules/negate.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/underscore/modules/contains.js\");\n/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick.js */ \"./node_modules/underscore/modules/pick.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Return a copy of the object without the disallowed properties.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj, keys) {\r\n  var iteratee = keys[0], context;\r\n  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(iteratee)) {\r\n    iteratee = (0,_negate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(iteratee);\r\n    if (keys.length > 1) context = keys[1];\r\n  } else {\r\n    keys = (0,_map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_flatten_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(keys, false, false), String);\r\n    iteratee = function(value, key) {\r\n      return !(0,_contains_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(keys, key);\r\n    };\r\n  }\r\n  return (0,_pick_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(obj, iteratee, context);\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/omit.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/once.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/once.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ \"./node_modules/underscore/modules/partial.js\");\n/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before.js */ \"./node_modules/underscore/modules/before.js\");\n\r\n\r\n\r\n// Returns a function that will be executed at most one time, no matter how\r\n// often you call it. Useful for lazy initialization.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_partial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 2));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/once.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/pairs.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pairs.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pairs)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n// Convert an object into a list of `[key, value]` pairs.\r\n// The opposite of `_.object` with one argument.\r\nfunction pairs(obj) {\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  var length = _keys.length;\r\n  var pairs = Array(length);\r\n  for (var i = 0; i < length; i++) {\r\n    pairs[i] = [_keys[i], obj[_keys[i]]];\r\n  }\r\n  return pairs;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/pairs.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/partial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/partial.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_executeBound.js */ \"./node_modules/underscore/modules/_executeBound.js\");\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n\r\n\r\n\r\n\r\n// Partially apply a function by creating a version that has had some of its\r\n// arguments pre-filled, without changing its dynamic `this` context. `_` acts\r\n// as a placeholder by default, allowing any combination of arguments to be\r\n// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.\r\nvar partial = (0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(func, boundArgs) {\r\n  var placeholder = partial.placeholder;\r\n  var bound = function() {\r\n    var position = 0, length = boundArgs.length;\r\n    var args = Array(length);\r\n    for (var i = 0; i < length; i++) {\r\n      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];\r\n    }\r\n    while (position < arguments.length) args.push(arguments[position++]);\r\n    return (0,_executeBound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(func, bound, this, this, args);\r\n  };\r\n  return bound;\r\n});\r\n\r\npartial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partial);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/partial.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/partition.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/partition.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ \"./node_modules/underscore/modules/_group.js\");\n\r\n\r\n// Split a collection into two arrays: one whose elements all pass the given\r\n// truth test, and one whose elements all do not pass the truth test.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_group_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(result, value, pass) {\r\n  result[pass ? 0 : 1].push(value);\r\n}, true));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/partition.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/pick.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/pick.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ \"./node_modules/underscore/modules/_optimizeCb.js\");\n/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allKeys.js */ \"./node_modules/underscore/modules/allKeys.js\");\n/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keyInObj.js */ \"./node_modules/underscore/modules/_keyInObj.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Return a copy of the object only containing the allowed properties.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj, keys) {\r\n  var result = {}, iteratee = keys[0];\r\n  if (obj == null) return result;\r\n  if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(iteratee)) {\r\n    if (keys.length > 1) iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(iteratee, keys[1]);\r\n    keys = (0,_allKeys_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj);\r\n  } else {\r\n    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    keys = (0,_flatten_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(keys, false, false);\r\n    obj = Object(obj);\r\n  }\r\n  for (var i = 0, length = keys.length; i < length; i++) {\r\n    var key = keys[i];\r\n    var value = obj[key];\r\n    if (iteratee(value, key, obj)) result[key] = value;\r\n  }\r\n  return result;\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/pick.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/pluck.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pluck.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pluck)\n/* harmony export */ });\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ \"./node_modules/underscore/modules/property.js\");\n\r\n\r\n\r\n// Convenience version of a common use case of `_.map`: fetching a property.\r\nfunction pluck(obj, key) {\r\n  return (0,_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, (0,_property_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(key));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/pluck.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/property.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/property.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ property)\n/* harmony export */ });\n/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deepGet.js */ \"./node_modules/underscore/modules/_deepGet.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ \"./node_modules/underscore/modules/_toPath.js\");\n\r\n\r\n\r\n// Creates a function that, when passed an object, will traverse that object’s\r\n// properties down the given `path`, specified as an array of keys or indices.\r\nfunction property(path) {\r\n  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path);\r\n  return function(obj) {\r\n    return (0,_deepGet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, path);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/property.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/propertyOf.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/propertyOf.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ propertyOf)\n/* harmony export */ });\n/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ \"./node_modules/underscore/modules/noop.js\");\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ \"./node_modules/underscore/modules/get.js\");\n\r\n\r\n\r\n// Generates a function for a given object that returns a given property.\r\nfunction propertyOf(obj) {\r\n  if (obj == null) return _noop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  return function(path) {\r\n    return (0,_get_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, path);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/propertyOf.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/random.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/random.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ random)\n/* harmony export */ });\n// Return a random integer between `min` and `max` (inclusive).\r\nfunction random(min, max) {\r\n  if (max == null) {\r\n    max = min;\r\n    min = 0;\r\n  }\r\n  return min + Math.floor(Math.random() * (max - min + 1));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/random.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/range.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/range.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ range)\n/* harmony export */ });\n// Generate an integer Array containing an arithmetic progression. A port of\r\n// the native Python `range()` function. See\r\n// [the Python documentation](https://docs.python.org/library/functions.html#range).\r\nfunction range(start, stop, step) {\r\n  if (stop == null) {\r\n    stop = start || 0;\r\n    start = 0;\r\n  }\r\n  if (!step) {\r\n    step = stop < start ? -1 : 1;\r\n  }\r\n\r\n  var length = Math.max(Math.ceil((stop - start) / step), 0);\r\n  var range = Array(length);\r\n\r\n  for (var idx = 0; idx < length; idx++, start += step) {\r\n    range[idx] = start;\r\n  }\r\n\r\n  return range;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/range.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reduce.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ \"./node_modules/underscore/modules/_createReduce.js\");\n\r\n\r\n// **Reduce** builds up a single result from a list of values, aka `inject`,\r\n// or `foldl`.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createReduce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/reduce.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/reduceRight.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/reduceRight.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ \"./node_modules/underscore/modules/_createReduce.js\");\n\r\n\r\n// The right-associative version of reduce, also known as `foldr`.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createReduce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/reduceRight.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/reject.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reject.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reject)\n/* harmony export */ });\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/underscore/modules/filter.js\");\n/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate.js */ \"./node_modules/underscore/modules/negate.js\");\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n\r\n\r\n\r\n\r\n// Return all the elements for which a truth test fails.\r\nfunction reject(obj, predicate, context) {\r\n  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, (0,_negate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_cb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(predicate)), context);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/reject.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/rest.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/rest.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rest)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// Returns everything but the first entry of the `array`. Especially useful on\r\n// the `arguments` object. Passing an **n** will return the rest N values in the\r\n// `array`.\r\nfunction rest(array, n, guard) {\r\n  return _setup_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(array, n == null || guard ? 1 : n);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/rest.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/restArguments.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/restArguments.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ restArguments)\n/* harmony export */ });\n// Some functions take a variable number of arguments, or a few expected\r\n// arguments at the beginning and then a variable number of values to operate\r\n// on. This helper accumulates all remaining arguments past the function’s\r\n// argument length (or an explicit `startIndex`), into an array that becomes\r\n// the last argument. Similar to ES6’s \"rest parameter\".\r\nfunction restArguments(func, startIndex) {\r\n  startIndex = startIndex == null ? func.length - 1 : +startIndex;\r\n  return function() {\r\n    var length = Math.max(arguments.length - startIndex, 0),\r\n        rest = Array(length),\r\n        index = 0;\r\n    for (; index < length; index++) {\r\n      rest[index] = arguments[index + startIndex];\r\n    }\r\n    switch (startIndex) {\r\n      case 0: return func.call(this, rest);\r\n      case 1: return func.call(this, arguments[0], rest);\r\n      case 2: return func.call(this, arguments[0], arguments[1], rest);\r\n    }\r\n    var args = Array(startIndex + 1);\r\n    for (index = 0; index < startIndex; index++) {\r\n      args[index] = arguments[index];\r\n    }\r\n    args[startIndex] = rest;\r\n    return func.apply(this, args);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/restArguments.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/result.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/result.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ result)\n/* harmony export */ });\n/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ \"./node_modules/underscore/modules/isFunction.js\");\n/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ \"./node_modules/underscore/modules/_toPath.js\");\n\r\n\r\n\r\n// Traverses the children of `obj` along `path`. If a child is a function, it\r\n// is invoked with its parent as context. Returns the value of the final\r\n// child, or `fallback` if any child is undefined.\r\nfunction result(obj, path, fallback) {\r\n  path = (0,_toPath_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path);\r\n  var length = path.length;\r\n  if (!length) {\r\n    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fallback) ? fallback.call(obj) : fallback;\r\n  }\r\n  for (var i = 0; i < length; i++) {\r\n    var prop = obj == null ? void 0 : obj[path[i]];\r\n    if (prop === void 0) {\r\n      prop = fallback;\r\n      i = length; // Ensure we don't continue iterating.\r\n    }\r\n    obj = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prop) ? prop.call(obj) : prop;\r\n  }\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/result.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/sample.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sample.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sample)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.js */ \"./node_modules/underscore/modules/random.js\");\n/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toArray.js */ \"./node_modules/underscore/modules/toArray.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Sample **n** random values from a collection using the modern version of the\r\n// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).\r\n// If **n** is not specified, returns a single random element.\r\n// The internal `guard` argument allows it to work with `_.map`.\r\nfunction sample(obj, n, guard) {\r\n  if (n == null || guard) {\r\n    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) obj = (0,_values_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\r\n    return obj[(0,_random_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj.length - 1)];\r\n  }\r\n  var sample = (0,_toArray_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(obj);\r\n  var length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sample);\r\n  n = Math.max(Math.min(n, length), 0);\r\n  var last = length - 1;\r\n  for (var index = 0; index < n; index++) {\r\n    var rand = (0,_random_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, last);\r\n    var temp = sample[index];\r\n    sample[index] = sample[rand];\r\n    sample[rand] = temp;\r\n  }\r\n  return sample.slice(0, n);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/sample.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/shuffle.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/shuffle.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shuffle)\n/* harmony export */ });\n/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.js */ \"./node_modules/underscore/modules/sample.js\");\n\r\n\r\n// Shuffle a collection.\r\nfunction shuffle(obj) {\r\n  return (0,_sample_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, Infinity);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/shuffle.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/size.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/size.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ size)\n/* harmony export */ });\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n// Return the number of elements in a collection.\r\nfunction size(obj) {\r\n  if (obj == null) return 0;\r\n  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) ? obj.length : (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj).length;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/size.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/some.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/some.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ some)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n\r\n\r\n// Determine if at least one element in the object passes a truth test.\r\nfunction some(obj, predicate, context) {\r\n  predicate = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(predicate, context);\r\n  var _keys = !(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj) && (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj),\r\n      length = (_keys || obj).length;\r\n  for (var index = 0; index < length; index++) {\r\n    var currentKey = _keys ? _keys[index] : index;\r\n    if (predicate(obj[currentKey], currentKey, obj)) return true;\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/some.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/sortBy.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sortBy.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sortBy)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck.js */ \"./node_modules/underscore/modules/pluck.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n\r\n\r\n\r\n\r\n// Sort the object's values by a criterion produced by an iteratee.\r\nfunction sortBy(obj, iteratee, context) {\r\n  var index = 0;\r\n  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context);\r\n  return (0,_pluck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_map_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, function(value, key, list) {\r\n    return {\r\n      value: value,\r\n      index: index++,\r\n      criteria: iteratee(value, key, list)\r\n    };\r\n  }).sort(function(left, right) {\r\n    var a = left.criteria;\r\n    var b = right.criteria;\r\n    if (a !== b) {\r\n      if (a > b || a === void 0) return 1;\r\n      if (a < b || b === void 0) return -1;\r\n    }\r\n    return left.index - right.index;\r\n  }), 'value');\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/sortBy.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/sortedIndex.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/sortedIndex.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sortedIndex)\n/* harmony export */ });\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n\r\n\r\n\r\n// Use a comparator function to figure out the smallest index at which\r\n// an object should be inserted so as to maintain order. Uses binary search.\r\nfunction sortedIndex(array, obj, iteratee, context) {\r\n  iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context, 1);\r\n  var value = iteratee(obj);\r\n  var low = 0, high = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array);\r\n  while (low < high) {\r\n    var mid = Math.floor((low + high) / 2);\r\n    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;\r\n  }\r\n  return low;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/sortedIndex.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/tap.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/tap.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tap)\n/* harmony export */ });\n// Invokes `interceptor` with the `obj` and then returns `obj`.\r\n// The primary purpose of this method is to \"tap into\" a method chain, in\r\n// order to perform operations on intermediate results within the chain.\r\nfunction tap(obj, interceptor) {\r\n  interceptor(obj);\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/tap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/template.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/template.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ template)\n/* harmony export */ });\n/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ \"./node_modules/underscore/modules/defaults.js\");\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateSettings.js */ \"./node_modules/underscore/modules/templateSettings.js\");\n\r\n\r\n\r\n\r\n// When customizing `_.templateSettings`, if you don't want to define an\r\n// interpolation, evaluation or escaping regex, we need one that is\r\n// guaranteed not to match.\r\nvar noMatch = /(.)^/;\r\n\r\n// Certain characters need to be escaped so that they can be put into a\r\n// string literal.\r\nvar escapes = {\r\n  \"'\": \"'\",\r\n  '\\\\': '\\\\',\r\n  '\\r': 'r',\r\n  '\\n': 'n',\r\n  '\\u2028': 'u2028',\r\n  '\\u2029': 'u2029'\r\n};\r\n\r\nvar escapeRegExp = /\\\\|'|\\r|\\n|\\u2028|\\u2029/g;\r\n\r\nfunction escapeChar(match) {\r\n  return '\\\\' + escapes[match];\r\n}\r\n\r\n// In order to prevent third-party code injection through\r\n// `_.templateSettings.variable`, we test it against the following regular\r\n// expression. It is intentionally a bit more liberal than just matching valid\r\n// identifiers, but still prevents possible loopholes through defaults or\r\n// destructuring assignment.\r\nvar bareIdentifier = /^\\s*(\\w|\\$)+\\s*$/;\r\n\r\n// JavaScript micro-templating, similar to John Resig's implementation.\r\n// Underscore templating handles arbitrary delimiters, preserves whitespace,\r\n// and correctly escapes quotes within interpolated code.\r\n// NB: `oldSettings` only exists for backwards compatibility.\r\nfunction template(text, settings, oldSettings) {\r\n  if (!settings && oldSettings) settings = oldSettings;\r\n  settings = (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].templateSettings);\r\n\r\n  // Combine delimiters into one regular expression via alternation.\r\n  var matcher = RegExp([\r\n    (settings.escape || noMatch).source,\r\n    (settings.interpolate || noMatch).source,\r\n    (settings.evaluate || noMatch).source\r\n  ].join('|') + '|$', 'g');\r\n\r\n  // Compile the template source, escaping string literals appropriately.\r\n  var index = 0;\r\n  var source = \"__p+='\";\r\n  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {\r\n    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);\r\n    index = offset + match.length;\r\n\r\n    if (escape) {\r\n      source += \"'+\\n((__t=(\" + escape + \"))==null?'':_.escape(__t))+\\n'\";\r\n    } else if (interpolate) {\r\n      source += \"'+\\n((__t=(\" + interpolate + \"))==null?'':__t)+\\n'\";\r\n    } else if (evaluate) {\r\n      source += \"';\\n\" + evaluate + \"\\n__p+='\";\r\n    }\r\n\r\n    // Adobe VMs need the match returned to produce the correct offset.\r\n    return match;\r\n  });\r\n  source += \"';\\n\";\r\n\r\n  var argument = settings.variable;\r\n  if (argument) {\r\n    // Insure against third-party code injection. (CVE-2021-23358)\r\n    if (!bareIdentifier.test(argument)) throw new Error(\r\n      'variable is not a bare identifier: ' + argument\r\n    );\r\n  } else {\r\n    // If a variable is not specified, place data values in local scope.\r\n    source = 'with(obj||{}){\\n' + source + '}\\n';\r\n    argument = 'obj';\r\n  }\r\n\r\n  source = \"var __t,__p='',__j=Array.prototype.join,\" +\r\n    \"print=function(){__p+=__j.call(arguments,'');};\\n\" +\r\n    source + 'return __p;\\n';\r\n\r\n  var render;\r\n  try {\r\n    render = new Function(argument, '_', source);\r\n  } catch (e) {\r\n    e.source = source;\r\n    throw e;\r\n  }\r\n\r\n  var template = function(data) {\r\n    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  };\r\n\r\n  // Provide the compiled source as a convenience for precompilation.\r\n  template.source = 'function(' + argument + '){\\n' + source + '}';\r\n\r\n  return template;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/template.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/templateSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/templateSettings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n\r\n\r\n// By default, Underscore uses ERB-style template delimiters. Change the\r\n// following template settings to use alternative delimiters.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].templateSettings = {\r\n  evaluate: /<%([\\s\\S]+?)%>/g,\r\n  interpolate: /<%=([\\s\\S]+?)%>/g,\r\n  escape: /<%-([\\s\\S]+?)%>/g\r\n});\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/templateSettings.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/throttle.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/throttle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ throttle)\n/* harmony export */ });\n/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now.js */ \"./node_modules/underscore/modules/now.js\");\n\r\n\r\n// Returns a function, that, when invoked, will only be triggered at most once\r\n// during a given window of time. Normally, the throttled function will run\r\n// as much as it can, without ever going more than once per `wait` duration;\r\n// but if you'd like to disable the execution on the leading edge, pass\r\n// `{leading: false}`. To disable execution on the trailing edge, ditto.\r\nfunction throttle(func, wait, options) {\r\n  var timeout, context, args, result;\r\n  var previous = 0;\r\n  if (!options) options = {};\r\n\r\n  var later = function() {\r\n    previous = options.leading === false ? 0 : (0,_now_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    timeout = null;\r\n    result = func.apply(context, args);\r\n    if (!timeout) context = args = null;\r\n  };\r\n\r\n  var throttled = function() {\r\n    var _now = (0,_now_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    if (!previous && options.leading === false) previous = _now;\r\n    var remaining = wait - (_now - previous);\r\n    context = this;\r\n    args = arguments;\r\n    if (remaining <= 0 || remaining > wait) {\r\n      if (timeout) {\r\n        clearTimeout(timeout);\r\n        timeout = null;\r\n      }\r\n      previous = _now;\r\n      result = func.apply(context, args);\r\n      if (!timeout) context = args = null;\r\n    } else if (!timeout && options.trailing !== false) {\r\n      timeout = setTimeout(later, remaining);\r\n    }\r\n    return result;\r\n  };\r\n\r\n  throttled.cancel = function() {\r\n    clearTimeout(timeout);\r\n    previous = 0;\r\n    timeout = context = args = null;\r\n  };\r\n\r\n  return throttled;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/throttle.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/times.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/times.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ times)\n/* harmony export */ });\n/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ \"./node_modules/underscore/modules/_optimizeCb.js\");\n\r\n\r\n// Run a function **n** times.\r\nfunction times(n, iteratee, context) {\r\n  var accum = Array(Math.max(0, n));\r\n  iteratee = (0,_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iteratee, context, 1);\r\n  for (var i = 0; i < n; i++) accum[i] = iteratee(i);\r\n  return accum;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/times.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/toArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/toArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toArray)\n/* harmony export */ });\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ \"./node_modules/underscore/modules/isString.js\");\n/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isArrayLike.js */ \"./node_modules/underscore/modules/_isArrayLike.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ \"./node_modules/underscore/modules/map.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/underscore/modules/identity.js\");\n/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.js */ \"./node_modules/underscore/modules/values.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Safely create a real, live array from anything iterable.\r\nvar reStrSymbol = /[^\\ud800-\\udfff]|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff]/g;\r\nfunction toArray(obj) {\r\n  if (!obj) return [];\r\n  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(obj);\r\n  if ((0,_isString_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj)) {\r\n    // Keep surrogate pair characters together.\r\n    return obj.match(reStrSymbol);\r\n  }\r\n  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)) return (0,_map_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n  return (0,_values_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(obj);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/toArray.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/toPath.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/toPath.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPath)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ \"./node_modules/underscore/modules/isArray.js\");\n\r\n\r\n\r\n// Normalize a (deep) property `path` to array.\r\n// Like `_.iteratee`, this function can be customized.\r\nfunction toPath(path) {\r\n  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path) ? path : [path];\r\n}\r\n_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toPath = toPath;\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/toPath.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/underscore-array-methods.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/underscore-array-methods.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ \"./node_modules/underscore/modules/underscore.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ \"./node_modules/underscore/modules/each.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chainResult.js */ \"./node_modules/underscore/modules/_chainResult.js\");\n\r\n\r\n\r\n\r\n\r\n// Add all mutator `Array` functions to the wrapper.\r\n(0,_each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {\r\n  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__.ArrayProto[name];\r\n  _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype[name] = function() {\r\n    var obj = this._wrapped;\r\n    if (obj != null) {\r\n      method.apply(obj, arguments);\r\n      if ((name === 'shift' || name === 'splice') && obj.length === 0) {\r\n        delete obj[0];\r\n      }\r\n    }\r\n    return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, obj);\r\n  };\r\n});\r\n\r\n// Add all accessor `Array` functions to the wrapper.\r\n(0,_each_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['concat', 'join', 'slice'], function(name) {\r\n  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__.ArrayProto[name];\r\n  _underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype[name] = function() {\r\n    var obj = this._wrapped;\r\n    if (obj != null) obj = method.apply(obj, arguments);\r\n    return (0,_chainResult_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, obj);\r\n  };\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/underscore-array-methods.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/underscore.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/underscore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _)\n/* harmony export */ });\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ \"./node_modules/underscore/modules/_setup.js\");\n\r\n\r\n// If Underscore is called as a function, it returns a wrapped object that can\r\n// be used OO-style. This wrapper holds altered versions of all functions added\r\n// through `_.mixin`. Wrapped objects may be chained.\r\nfunction _(obj) {\r\n  if (obj instanceof _) return obj;\r\n  if (!(this instanceof _)) return new _(obj);\r\n  this._wrapped = obj;\r\n}\r\n\r\n_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__.VERSION;\r\n\r\n// Extracts the result from a wrapped and chained object.\r\n_.prototype.value = function() {\r\n  return this._wrapped;\r\n};\r\n\r\n// Provide unwrapping proxies for some methods used in engine operations\r\n// such as arithmetic and JSON stringification.\r\n_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;\r\n\r\n_.prototype.toString = function() {\r\n  return String(this._wrapped);\r\n};\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/underscore.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/unescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/unescape.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ \"./node_modules/underscore/modules/_createEscaper.js\");\n/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unescapeMap.js */ \"./node_modules/underscore/modules/_unescapeMap.js\");\n\r\n\r\n\r\n// Function for unescaping strings from HTML interpolation.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/unescape.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/union.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/union.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq.js */ \"./node_modules/underscore/modules/uniq.js\");\n/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flatten.js */ \"./node_modules/underscore/modules/_flatten.js\");\n\r\n\r\n\r\n\r\n// Produce an array that contains the union: each distinct element from all of\r\n// the passed-in arrays.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(arrays) {\r\n  return (0,_uniq_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_flatten_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrays, true, true));\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/union.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/uniq.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/uniq.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ uniq)\n/* harmony export */ });\n/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBoolean.js */ \"./node_modules/underscore/modules/isBoolean.js\");\n/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb.js */ \"./node_modules/underscore/modules/_cb.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/underscore/modules/contains.js\");\n\r\n\r\n\r\n\r\n\r\n// Produce a duplicate-free version of the array. If the array has already\r\n// been sorted, you have the option of using a faster algorithm.\r\n// The faster algorithm will not work with an iteratee if the iteratee\r\n// is not a one-to-one function, so providing an iteratee will disable\r\n// the faster algorithm.\r\nfunction uniq(array, isSorted, iteratee, context) {\r\n  if (!(0,_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isSorted)) {\r\n    context = iteratee;\r\n    iteratee = isSorted;\r\n    isSorted = false;\r\n  }\r\n  if (iteratee != null) iteratee = (0,_cb_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(iteratee, context);\r\n  var result = [];\r\n  var seen = [];\r\n  for (var i = 0, length = (0,_getLength_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(array); i < length; i++) {\r\n    var value = array[i],\r\n        computed = iteratee ? iteratee(value, i, array) : value;\r\n    if (isSorted && !iteratee) {\r\n      if (!i || seen !== computed) result.push(value);\r\n      seen = computed;\r\n    } else if (iteratee) {\r\n      if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(seen, computed)) {\r\n        seen.push(computed);\r\n        result.push(value);\r\n      }\r\n    } else if (!(0,_contains_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(result, value)) {\r\n      result.push(value);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/uniq.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/uniqueId.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/uniqueId.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ uniqueId)\n/* harmony export */ });\n// Generate a unique integer id (unique within the entire client session).\r\n// Useful for temporary DOM ids.\r\nvar idCounter = 0;\r\nfunction uniqueId(prefix) {\r\n  var id = ++idCounter + '';\r\n  return prefix ? prefix + id : id;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/uniqueId.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/unzip.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/unzip.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unzip)\n/* harmony export */ });\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ \"./node_modules/underscore/modules/max.js\");\n/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ \"./node_modules/underscore/modules/_getLength.js\");\n/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluck.js */ \"./node_modules/underscore/modules/pluck.js\");\n\r\n\r\n\r\n\r\n// Complement of zip. Unzip accepts an array of arrays and groups\r\n// each array's elements on shared indices.\r\nfunction unzip(array) {\r\n  var length = (array && (0,_max_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).length) || 0;\r\n  var result = Array(length);\r\n\r\n  for (var index = 0; index < length; index++) {\r\n    result[index] = (0,_pluck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(array, index);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/unzip.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/values.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/values.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ values)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./node_modules/underscore/modules/keys.js\");\n\r\n\r\n// Retrieve the values of an object's properties.\r\nfunction values(obj) {\r\n  var _keys = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  var length = _keys.length;\r\n  var values = Array(length);\r\n  for (var i = 0; i < length; i++) {\r\n    values[i] = obj[_keys[i]];\r\n  }\r\n  return values;\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/values.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/where.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/where.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ where)\n/* harmony export */ });\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/underscore/modules/filter.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ \"./node_modules/underscore/modules/matcher.js\");\n\r\n\r\n\r\n// Convenience version of a common use case of `_.filter`: selecting only\r\n// objects containing specific `key:value` pairs.\r\nfunction where(obj, attrs) {\r\n  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, (0,_matcher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(attrs));\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/where.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/without.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/without.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.js */ \"./node_modules/underscore/modules/difference.js\");\n\r\n\r\n\r\n// Return a version of the array that does not contain the specified value(s).\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(array, otherArrays) {\r\n  return (0,_difference_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array, otherArrays);\r\n}));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/without.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/wrap.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wrap)\n/* harmony export */ });\n/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ \"./node_modules/underscore/modules/partial.js\");\n\r\n\r\n// Returns the first function passed as an argument to the second,\r\n// allowing you to adjust arguments, run code before and after, and\r\n// conditionally execute the original function.\r\nfunction wrap(func, wrapper) {\r\n  return (0,_partial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(wrapper, func);\r\n}\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/wrap.js?");

/***/ }),

/***/ "./node_modules/underscore/modules/zip.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/zip.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ \"./node_modules/underscore/modules/restArguments.js\");\n/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unzip.js */ \"./node_modules/underscore/modules/unzip.js\");\n\r\n\r\n\r\n// Zip together multiple lists into a single array -- elements that share\r\n// an index go together.\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\n\n//# sourceURL=webpack://simple_http/./node_modules/underscore/modules/zip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/client.js");
/******/ 	
/******/ })()
;