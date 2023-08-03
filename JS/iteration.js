"use strict";

// For Loop
// Initialise a variable; Set a condition; Choose an iterator
// i++ is shorthand for  i = i + 1;
// i-- is shorthand for  i = i - 1;
// i+=2 is shorthand for i = i + 2;
// i-=2 is shorthand for i = i - 2;
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While Loop
// Needs only a condition
// Will continue to loop, as long as the condition is true

let flag = true;
let count = 0;

while (flag === true) {
    console.log(count);
    count++;

    if (count === 10) {
        // flag = false;
        break;
    }
}

// Do While Loop
// Always guaranteed one iteration
let count2 = 0;
let flag2 = false;
do {
    count2++;
    console.log(count2);
} while (flag2 === true)

// Question 1
for (let A = 100; A <= 200; A++) {
    console.log("A");
    // console.log("a = " + A);
    // console.log(`a = ${A}`);
}

// Question 2
for (let A = 100; A <= 200; A++) {

    if (A % 2 == 0) {
        console.log("even");
    } else {
        console.log("false");
    }
    
}

// Question 3
for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(i);
    }

} 
