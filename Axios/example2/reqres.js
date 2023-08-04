'use strict';

// Selectors
let tableBody = document.querySelector("#tableBody");
let getBtn = document.querySelector("#get");
let postBtn = document.querySelector("#post");

// HTTP Requests - Request/Response
// Axios uses promises
// We must handle the success, and the failure

// GET - READ
let getRequest = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            // console.log(response.data);
            displayResult(response.data);
        })
        .catch((err) => {
            console.error(err);
        });
}


// POST - CREATE
let postRequest = () => {

    let obj = {
        "title": "foo",
        "body": "bar",
        "userId": 1
    }

    axios.post("https://jsonplaceholder.typicode.com/posts", obj)
        .then((response) => {
            console.log(response);
            getRequest();
        })
        .catch((err) => {
            console.error(err);
        });
}

let displayResult = (data) => {
    for (let entry of data) {
        const entryRow = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.textContent = entry.id;
        td2.textContent = entry.userId;
        td3.textContent = entry.title;
        td4.textContent = entry.body;

        entryRow.appendChild(td1);
        entryRow.appendChild(td2);
        entryRow.appendChild(td3);
        entryRow.appendChild(td4);

        tableBody.appendChild(entryRow);
    }
}

// Event Listeners
getBtn.addEventListener("click", getRequest);
postBtn.addEventListener("click", postRequest);