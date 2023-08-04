"use strict";

// Selectors
let resultsDiv = document.querySelector("#results");
let getBtn = document.querySelector("#get");
let postBtn = document.querySelector("#post");

// HTTP Requests - Request/Response
// Axios uses promises
// We must handle the success, and the failure

// GET - READ
let getRequest = () => {

    // This request creates a "promise"
    // This promise will either be resolved or rejected (pass/fail)
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

    // data is the array of objects
    // entry is each individual object
    for (let entry of data) {
        const entryDiv = document.createElement("div");
        entryDiv.setAttribute("class", "entryDiv");
        const text = document.createTextNode(`ID: ${entry.id} | Title: ${entry.title} | User ID: ${entry.userId} | Body: ${entry.body}`);

        entryDiv.appendChild(text);
        resultsDiv.appendChild(entryDiv);
    }

}

// Event Listeners
getBtn.addEventListener("click", getRequest);
postBtn.addEventListener("click", postRequest);