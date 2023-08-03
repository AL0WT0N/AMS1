console.log("This is a console.log");
console.info("This is a console.info");
console.warn("This is a console.warn");
console.error("This is a console.error");

// let myNumber = 10;
// const myConstantNumber = 5;

// // This works
// myNumber = 100;

// This line won't work, because it's a constant
// myConstantNumber = 100;

// console.log(myNumber);
// console.log(myConstantNumber);

// let myTxt = "some text";

// console.log("this is a %c a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue; padding: 2px");

// let age = 28;

// // Variables are case sensitive
// console.log(Age);

let myNullValue = null;
console.log(myNullValue);
console.log(typeof myNullValue);

// This is currently undefined
let myUndefinedValue;
console.log(myUndefinedValue);
console.log(typeof myUndefinedValue);

// In JS == only checks value
console.log(myNullValue == undefined);

// This is true
console.log("10" == 10);

// === checks type AND value (strict equality)
console.log(myNullValue === undefined);
console.log("10" === 10);


// Concatenation and Template Literals
let person = "Anoush";
let myString = "Hello there " + person;
console.log(myString);

let myTemplateLiteral = `Hello there ${person}`;
console.log(myTemplateLiteral);

let myTemplateLiteral2 = `My age is ${25 + 5}`;
console.log(myTemplateLiteral2);

// let result = person.indexOf("n");
// console.log(result);

console.log(person.indexOf("n"));

console.log(person.charAt(1));

console.log(person.toUpperCase());

// Eval with evaluate a string
console.log(eval('5 * 8 + 4 - 2'));

let someString = "My name is 'Anoush'";

// ASI will put a semi-colon after return here, causing the function to return "undefined"
function sayHello() {
    return
    2+1;
}

console.log(sayHello());