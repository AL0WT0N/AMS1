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

console.log(anoush);

console.log(`${anoush.firstName} is ${anoush.age} years old`);

console.log(`${anoush["firstName"]} is ${anoush["age"]} years old`);

let richard = new Object();
richard.firstName = "Richard";
richard.lastName = "Smith";
richard.age = 28;
richard.jobTitle = "Dev";

console.log(richard);

let bob = new Object();
bob["firstName"] = "Bob";
bob["lastName"] = "Bobson";
bob["age"] = 25;
bob["jobTitle"] = "Dev";

console.log(bob);


