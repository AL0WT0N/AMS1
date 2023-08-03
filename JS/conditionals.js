"use strict";

let x = 20;

if (x < 20) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let myName = "Anoush";

if (myName) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// if/else if
let y = 10;

if (y < 10) {
    console.log("Value is less than 10");
} else if (y < 20) {
    console.log("Value is between 10 and 20");
} else if (y < 30) {
    console.log("Value is between 20 and 30");
} else {
    console.log("value is 30 or more");
}

let day = "monday";

if (day == "monday") {
    console.log("First day of the week");
} else if (day == "tuesday") {
    console.log("Second day of the week");
} else if (day == "wednesday") {
    console.log("Third day of the week");
} else {
    console.log("Fourth or higher day of the week");
}

// Switch Case Statements
// Prompt is used for user input (only works in browser)

let value = parseInt(prompt("Please enter a value"));

// let value = prompt("Please enter a value");
// let parsedValue = parseInt(value)

// alert can be used to pop a message up into a webpage
switch(value) {
    // You can combine cases by not including a break
    case 5:
    case 10:
    case 15:
        console.log("Value is 5, 10 or 15");
        break; // break to prevent running further cases
    case 20:
        console.log("Value is 20");
        break;
    default:
        console.log("This case is the fallback - if no previous case matches");
}

// Tenary if

let num1 = 5;
let num2 = 10;

// && (AND) means ALL conditions must be true
// In this case, both must be true
// Stops checking conditions if one of them is false
if (num1 < 10 && num1 > 3) {
    console.log("number is between 3 and 10");
}

// || (OR) means ANY condition can be true for the entire condition to be true
// Stops checking conditions if one of them is true
if (num1 < 10 || num1 > 3) {
    console.log("number is either less than 10 or greater than 3");
}


let age;

// if (num1 + num2 < 20) {
//     age = 10;
// } else {
//     age = 20;
// }

// console.log(age);

//    (    condition   )? true : false
age = (num1 + num2 < 20)? 10 : 20;