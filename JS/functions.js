'use strict';

// Function declaration - named functions
// Function is hoisted to the top of this script
function myFunc(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

// Function call
myFunc(5, 10, 15); // 30

// Function declaration with a return
function myFuncWithReturn(num1, num2, num3) {
    return (num1 + num2 + num3);
}

console.log(myFuncWithReturn(5, 10, 15));

// Function Expressions - Anonymous functions
const myFuncExpression = function(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

myFuncExpression(4, 5, 6); // 15

// Function Expressions with Arrow Functions
const myArrowFunction = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
}

// arrow function with no parameters
const myArrowFunctionTwo = () => { 
    console.log("hello") 
}

// arrow function with one parameters
const myArrowFunctionThree = num1 => { 
    console.log(num1) 
}

// If you want to return a single statement
// You don't need curly braces OR the return keyword
// In this example - num1 + num2 + num3 will be returned
let myArrowFunctionWithReturn = (num1, num2, num3) => num1 + num2 + num3