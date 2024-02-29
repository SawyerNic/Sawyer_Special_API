

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

const sendGet = async (userForm) => {
    const action = document.querySelector('#urlField').value;
    const nameMethod = document.querySelector('#methodSelect').value.toUpperCase();

    let response = await fetch(action, {
        method: nameMethod,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })

    handleResponse(response, nameMethod === 'GET');

}

//Uses fetch to send a postRequest. Marksed as async because we use await
//within it.
const sendPost = async (nameForm) => {
    //Grab all the info from the form
    const nameAction = nameForm.getAttribute('action');
    const nameMethod = nameForm.getAttribute('method');

    const nameField = nameForm.querySelector('#nameField');
    const ageField = nameForm.querySelector('#ageField');

    //Build a data string in the FORM-URLENCODED format.
    const formData = `name=${nameField.value}&age=${ageField.value}`;

    //Make a fetch request and await a response. Set the method to
    //the one provided by the form (POST). Set the headers. Content-Type
    //is the type of data we are sending. Accept is the data we would like
    //in response. Then add our FORM-URLENCODED string as the body of the request.
    let response = await fetch(nameAction, {
        method: nameMethod,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: formData,
    });

    //Once we have a response, handle it.
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
    
    //Grab the form
    const incedentForm = document.querySelector('#incedentForm');
    const categoryForm = document.querySelector('#category');


    //Create an addUser function that cancels the forms default action and
    //calls our sendPost function above.
    const addUser = (e) => {
        e.preventDefault();
        sendPost(null);
        return false;
    }

    const getUser = (e) => {
        e.preventDefault();
        sendGet(userForm);
        return false;
    }

    const reportIncedent = (e) => {
        e.preventDefault();
        sendPost(null);
        return false;
    }

    //Call addUser when the submit event fires on the form.
    incedentForm.addEventListener('submit', addUser);    

};

//When the window loads, run init.
window.onload = init;