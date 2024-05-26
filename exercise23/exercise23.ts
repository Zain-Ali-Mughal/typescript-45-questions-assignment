/* Exercise 23: Conditional Tests: 
Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car = "subaru";
let age = 25;
let city = "Nawabshah";
let temperature = 50;
let isStudent = true;

// 5 True tests
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // True

console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is city == 'Nawabshah'? I predict True.");
console.log(city == "Nawabshah"); // True

console.log("Is temperature > 40? I predict True.");
console.log(temperature > 40); // True

console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true); // True

// 5 False tests
console.log("Is car == 'toyota'? I predict False.");
console.log(car == "toyota"); // False

console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

console.log("Is city == 'Karachi'? I predict False.");
console.log(city == "Karachi"); // False

console.log("Is temperature < 40? I predict False.");
console.log(temperature < 40); // False

console.log("Is isStudent != truecls? I predict False.");
console.log(isStudent != true); // False
