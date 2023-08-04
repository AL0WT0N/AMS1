'use strict';

// Global scope variables
let counter = 0;

// Selectors
// Selects existing elements from the DOM
let body = document.querySelector("body");

// Divs
let addToMeDiv = document.querySelector("#addToMe");
let saveDiv = document.querySelector("#saveToMe");

// Buttons
let addBtn = document.querySelector("#addBtn");
let savBtn = document.querySelector("#saveBtn");

// Functionality
let addToPage = () => {
    counter++;

    // Clear previous content
    addToMeDiv.innerHTML = "";

    // Create new HTML elements
    let newDiv = document.createElement("div"); //<div></div>
    let newText = document.createTextNode(`The current count is: ${counter}`); // loose text
    
    //append the text into the div
    newDiv.appendChild(newText); // <div> We LOVEEEE JS! </div>

    // This step adds our new elements to the existing div on the page
    addToMeDiv.appendChild(newDiv); // <div id="addToMe"> <div>We LOVEEEE JS!</div> </div>
    // addBtn.setAttribute("style", "display:none");
}

let saveToPage = () => {
    let entry = document.createElement("div");

    // Add a class to the div
    entry.setAttribute("class", "entries");

    let newText = document.createTextNode(counter);

    entry.appendChild(newText);
    saveDiv.appendChild(entry);
}

// Event listeners
addBtn.addEventListener("click", addToPage);
savBtn.addEventListener("click", saveToPage);