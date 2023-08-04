'use strict';

// Selectors
// Inputs from page
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

// Buttons from page
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");

// Divs from page
let mainDiv = document.querySelector("#mainDiv");

// Functionality
const add = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    // create a div to store the result
    let valueDiv = document.createElement("div");

    // create a text node that contains the result
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    valueDiv.appendChild(myValue);

    mainDiv.appendChild(valueDiv);
}

let clearResults = () => {
    mainDiv.innerHTML = "";
}

// Event Listeners
addBtn.addEventListener("click", add);
clearBtn.addEventListener("click", clearResults);