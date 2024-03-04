

//Handles our FETCH response. This function is async because it

const { result } = require("underscore");

//contains an await.
const handleResponse = async (response) => {

    console.log(response.status);
    //Grab the content section
    const content = document.querySelector('#content');

    //Based on the status code, display something
    switch (response.status) {
        case 200: //success
            console.log(`<b>Success</b>`);
            break;
        case 201: //created
            console.log('<b>Created</b>');
            break;
        case 204: //updated (no response back from server)
            console.log('<b>Updated (No Content)</b>');
            return;
        case 400: //bad request
            console.log(`<b>Bad Request</b>`);
            break;
        case 404:
            console.log(`<b>Not Found</b>`);
            break;
        default: //any other status code
            console.log(`Error code not implemented by client.`);
            break;
    }

    //If the response is not a 204, we want to parse the JSON and display it.
};

const handleGetResponse = async (response) => {
    console.log(response.status);
    //Grab the content section
    const resultsSection = document.getElementById('results');

    //Based on the status code, display something
    switch (response.status) {
        case 200: //success
            console.log(`<b>Success</b>`);
            break;
        case 201: //created
            console.log('<b>Created</b>');
            break;
        case 204: //updated (no response back from server)
            console.log('<b>Updated (No Content)</b>');
            return;
        case 400: //bad request
            console.log(`<b>Bad Request</b>`);
            break;
        case 404:
            console.log(`<b>Not Found</b>`);
            break;
        default: //any other status code
            console.log(`Error code not implemented by client.`);
            break;
    }

    //If the response is not a 204, we want to parse the JSON and display it.
    if (response.status !== 204) {
        const data = await response.json();
        const postsObject = data.incidents;
        const typeOfConst = typeof postsObject;
        console.log(typeOfConst);

        let postPage = document.createElement('div');

        // Iterate through the object and access each nested object
        for (const postKey in postsObject) {
            const post = postsObject[postKey];

            // Create a div element for each post
            const postElement = document.createElement('div');
            postElement.className = 'post';

            // Format the post content
            postElement.innerHTML = `<h2>${post.title}</h2>
                                     <p><strong>Category:</strong> ${post.category}</p>
                                     <p><strong>Incident:</strong> ${post.incedent}</p>`;

            // Add the formatted post element to the results section
            postPage.appendChild(postElement);
        }

        resultsSection.innerHTML = postPage.innerHTML;

    }
}

const handleHeadResponse = async (response) => {
    console.log(response.status);
    //Grab the content section
    const resultsSection = document.getElementById('results');

    //Based on the status code, display something
    switch (response.status) {
        case 200: //success
            resultsSection.innerHTML = `<b>Success</b>`;
            break;
        case 201: //created
            resultsSection.innerHTML = '<b>Created</b>';
            break;
        case 204: //updated (no response back from server)
            resultsSection.innerHTML = '<b>Updated (No Content)</b>';
            return;
        case 400: //bad request
            resultsSection.innerHTML = `<b>Bad Request</b>`;
            break;
        case 404:
            resultsSection.innerHTML = `<b>Not Found</b>`;
            break;
        default: //any other status code
            resultsSection.innerHTML = `Error code not implemented by client.`;
            break;
    }
}

const sendHead = async (url) => {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }

    let response = await requestFetch(url, 'HEAD', headers, null);

    handleHeadResponse(response);
}

const sendGet = async (url) => {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }

    let queryString = `category=${document.querySelector('#category').value}`

        url += '?' + queryString;
    
    console.log(url);
    let response = await requestFetch(url, 'GET', headers, null);

    handleGetResponse(response);

    if (url === '/feed') {
        window.location.href = response.url;
    }
}

//Uses fetch to send a postRequest. Marksed as async because we use await
//within it.
const sendPost = async (url, body) => {
    //Grab the form
    const incedent = JSON.stringify(body);

    //Create a new incedentData object
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }

    //Once we have a response, handle it.
    const response = await requestFetch(url, 'POST', headers, incedent);
    handleResponse(response);
};

//This function is used to make fetch requests. It is async because it
//contains an await.
//We will use this for the GET, HEAD and POST requests.
const requestFetch = async (url, method, headers, body) => {
    let response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
    });

    return response;
}

//Init function is called when window.onload runs (set below).
const init = () => {

    //Grab the elements we need to use
    const titleField = document.querySelector('#title');                //Title
    const incedentBox = document.querySelector('#incedentField')        //Incedent
    const categoryForm = document.querySelector('#category');           //Category
    const submitButton = document.querySelector('#submitButton');       //Submit button
    const ratePageButton = document.querySelector('#ratePage');         //Rate page button    
    const message = document.querySelector('#message');                 //Message
    const method = document.querySelector('#method');
    const getFeed = document.querySelector('#getIncedents');
    //Rate page

    //Function to n incedent when the button is clicked
    const addIncedent = (e) => {
        e.preventDefault();

        //If the fields are filled out, send the incedent to the server
        if (incedentBox.value != "" &&
            categoryForm.value != "none" &&
            titleField.value != "") {

            ratePageButton.disabled = false;

            ratings = {
                Chilling: 0,
                Recoverable: 0,
                Unpleasant: 0,
                Unrecoverable: 0,
                Dissapear_Forever: 0
            };

            const incidentData = {
                title: titleField.value,
                category: categoryForm.value,
                incedent: incedentBox.value,
                scores: ratings
            };

            sendPost('/submit', incidentData);
        }
        else {
            message.innerHTML = "Please fill out all fields";
            console.log("Please fill out all fields");
        }

        return false;
    }

    //Call addUser when the submit event fires on the form.
    if (submitButton) {
        submitButton.addEventListener('click', addIncedent);
    }
    if (ratePageButton) {
        ratePageButton.addEventListener('click', () => sendGet('/feed'));
    }

    if (getFeed) {
        getFeed.addEventListener('click', () => {
        switch (method.value) {
            case 'GET':
                sendGet('/getIncidents');
                break;
            case 'HEAD':
                sendHead('/getIncidents')
                break;
            default:
                console.log("Invalid method");
                break;
        }
    });
    }

};

//When the window loads, run init.
window.onload = init;