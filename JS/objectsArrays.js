"use strict";

// Objects in Javascript

// Object literal notation
let anoush = { 
    firstName: "Anoush", 
    lastName: "Lowton", 
    age: 30, 
    jobTitle: "Software Engineer" 
}

// Expando property
anoush.pets = 2;
anoush["car"] = "ford";

// updating an existing property value
anoush.firstName = "Noosh";

console.log(anoush);

// properties can be accessed with the dot notation
console.log(`${anoush.firstName} is ${anoush.age} years old`);

// properties can also be accessed with the square bracket notation
console.log(`${anoush["firstName"]} is ${anoush["age"]} years old`);

// dot notation can be used to add properties
// object created using the new Object() constructor
let richard = new Object();
richard.firstName = "Richard";
richard.lastName = "Smith";
richard.age = 28;
richard.jobTitle = "Dev";

console.log(richard);

// square bracket notation can be used to add properties too
let bob = new Object();
bob["firstName"] = "Bob";
bob["lastName"] = "Bobson";
bob["age"] = 25;
bob["jobTitle"] = "Dev";

console.log(bob);

//for in loop
// this will loop through the properties of an object
for (let key in bob) {
    // console.log(bob[key]);
    console.log(`${key} : ${bob[key]}`);
}

// Arrays          0         1         2 
let names = ["Anoush", "Richard", "James"];

// Empty Array
let myEmptyArray = Array();

// Creates an array with a specific size
// These 10 values will be undefined, until we assign values
let mySpecificSizeArray = Array(10);

let myArrayWithValues = Array("Anoush", "Richard", "James");

// normal for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for of loop - goes through the array one value at a time
for (let name of names) {
    console.log(name);
}

// for in loop - goes through the array one index at a time
for (let index in names) {
    console.log(names[index]);
}

let fruits =["apple","strawberries","banana", "grapes", "pear"];

console.log(fruits);             // ["apple", "strawberries", "banana", "grapes", "pear"]
console.log(fruits.sort());     // ["apple", "banana", "grapes", "pear", "strawberries"]
console.log(fruits.reverse()); // ["strawberries", "pear", "grapes", "banana", "apple"]
console.log(fruits.join());   // strawberries,pear,grapes,banana,apple
let joined = fruits.join("-");
console.log(joined);        // strawberries-pear-grapes-banana-apple

// push & pop
console.log(fruits.push("lemon"));
console.log(fruits);      // ["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
console.log(fruits.pop());
console.log(fruits);     // ["strawberries", "pear", "grapes", "banana", "apple"]

// unshift & shift
console.log(fruits.unshift("kiwi"));
console.log(fruits); // ["kiwi", "strawberries", "pear", "grapes", "banana", "apple"]
console.log(fruits.shift());
console.log(fruits); // ["strawberries", "pear", "grapes", "banana", "apple"]

// find index of existing array item
// splice from that index to remove the item
// you can store the item removed
let index = fruits.indexOf("pear");
let removedValue = fruits.splice(index, 1);

console.log(fruits);
console.log(removedValue);


// JSON - JavaScript Object Notation
// Language independent data interchange format
// Which means we use it to transfer data

let myJSONObj = {
    "propertyOne": "value one",
    "propertyTwo": "value two"
}

console.log(myJSONObj.propertyOne);

let objString = '{"name": "Anoush"}';
// Convert from JSON string to JS object (ready for use in JS)
let myObject = JSON.parse(objString);

console.log(myObject);

// Regular JavaScript Object
let myJavaScriptObject = {
    name: "James"
}

// convert from JS object to JSON string (ready for interchange/transfer)
let myObjectString = JSON.stringify(myJavaScriptObject);
console.log(myObjectString);

console.log(JSON.parse(myObjectString));






