"use strict";
// let and const are something called: Block scope
// Only available in the block they're defined in

// This is in global scope
let age = 10;

// Function Scope
let myFunction = () => {
    // This variable is only in scope in this function
    let adjustment = 5;

    // We can access age here
    age += adjustment; // equivelent to age = age + adjustment

    // If you want to access the value of 'adjustment' outside of this function you should return it:
    // return adjustment;
}

myFunction();

// age is still in scope here
console.log(age);

// The variable adjustment is out of scope here
console.log(adjustment);

// Loop Scope
for (let i = 0; i < 5; i++) {
    // This is only in scope in this loop, because let is block scope, and the loop is the nearest block
    let myVariable = 10;
}

// This is out of scope here and unavailable
console.log(myVariable);

// var is "function scoped"
// this means it will be "hoisted" to the top of the nearest function

function varScopeDemo() {

    
    // the var from the block below will be hoisted up to here  
    if (true) {
        var a = "javascript";     // function scope
        let b = "c++";       // block scope
        const c = "python"; // block scope

        console.log("inside if block");
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log("outside if block");
    console.log(a); // javascript
    console.log(b); // error
    console.log(c); // error
}