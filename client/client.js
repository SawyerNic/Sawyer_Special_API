

//Handles our FETCH response. This function is async because it
//contains an await.
const handleResponse = async (response, parseResponse) => {

    //Grab the content section
    const content = document.querySelector('#content');

    //Based on the status code, display something
    switch (response.status) {
        case 200: //success
            content.innerHTML = `<b>Success</b>`;
            break;
        case 201: //created
            content.innerHTML = '<b>Created</b>';
            break;
        case 204: //updated (no response back from server)
            content.innerHTML = '<b>Updated (No Content)</b>';
            return;
        case 400: //bad request
            content.innerHTML = `<b>Bad Request</b>`;
            break;
        case 404:
            content.innerHTML = `<b>Not Found</b>`;
            break;
        default: //any other status code
            content.innerHTML = `Error code not implemented by client.`;
            break;
    }

    //Parse the response to json. This works because we know the server always
    //sends back json. Await because .json() is an async function.
    if (parseResponse) {
        let obj = await response.json();


        if (obj.userList) {
            // Object.values(obj.userList).map(user => {
            //     content.innerHTML += `<p>{"${user.name}": {"name":"${user.name}","age":"${user.age}"}}</p>`;
            // })
            content.innerHTML += `<p>${JSON.stringify(obj.userList)}</p>`;
        }
    }


};

const sendGet = async (url) => {

    console.log(url);
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })

    handleResponse(response);
    window.location.href = response.url;

}

//Uses fetch to send a postRequest. Marksed as async because we use await
//within it.
const sendPost = async (url, incedentData) => {
    //Grab the form

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    //Create a new incedentData object
    let response = requestFetch(url, 'POST', headers, incedentData);

    //Once we have a response, handle it.
    handleResponse(response);
};

//This function is used to make fetch requests. It is async because it
//contains an await.
//We will use this for the GET, HEAD and POST requests.
const requestFetch = async (url, method, headers, body) => {
    console.log(body);
    body = JSON.stringify(body);
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
    const ratePage = document.querySelector('#ratePage');               //Rate page

    //Function to n incedent when the button is clicked
    const addIncedent = (e) => {
        e.preventDefault();

        //If the fields are filled out, send the incedent to the server
        if (incedentBox.value != "" &&
            categoryForm.value != "none" &&
            titleField.value != "") {

            ratePageButton.disabled = false;

            const ratings = {
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
        ratePageButton.addEventListener('click', () => sendGet('/thankYou'));
    }

};

//When the window loads, run init.
window.onload = init;