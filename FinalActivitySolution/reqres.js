'use strict';

// Selectors
let tableBody = document.querySelector("#tableBody");

// HTTP Requests - Request/Response
// Axios uses promises
// We must handle the success, and the failure
// GET - READ
let getRequest = () => {
    console.log("here");
    axios.get("https://api.tfl.gov.uk/Line/Mode/tube/Status")
        .then((response) => {
            // console.log(response.data);
            displayResult(response.data);
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

        td1.textContent = entry.name;
        td2.textContent = entry.lineStatuses[0].statusSeverityDescription;

        entryRow.appendChild(td1);
        entryRow.appendChild(td2);

        tableBody.appendChild(entryRow);
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", getRequest);