/* Exercise 24: More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let car = "Subaru";
let age = 25;
let city = "Nawabshah";
let temperature = 50;
let isStudent = true;
let fruits = ["apple", "banana", "cherry"];

// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == "Subaru"); // True

console.log("Is car != 'Toyota'? I predict True.");
console.log(car != "Toyota"); // True

console.log("Is car == 'BMW'? I predict False.");
console.log(car == "BMW"); // False

console.log("Is car != 'Subaru'? I predict False.");
console.log(car != "Subaru"); // False

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == "subaru"); // True

console.log("Is car.toLowerCase() == 'toyota'? I predict False.");
console.log(car.toLowerCase() == "toyota"); // False

// Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is age != 30? I predict True.");
console.log(age != 30); // True

console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

console.log("Is age < 30? I predict True.");
console.log(age < 30); // True

console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True

console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True

console.log("Is age == 30? I predict False.");
console.log(age == 30); // False

console.log("Is age != 25? I predict False.");
console.log(age != 25); // False

console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False

// Tests using "and" and "or" operators
console.log("Is age > 20 and age < 30? I predict True.");
console.log(age > 20 && age < 30); // True

console.log("Is age > 20 or age < 20? I predict True.");
console.log(age > 20 || age < 20); // True

console.log("Is age < 30 and city == 'Nawabshah'? I predict True.");
console.log(age < 30 && city == "Nawabshah"); // True

console.log("Is age > 30 and city == 'Nawabshah'? I predict False.");
console.log(age > 30 && city == "Nawabshah"); // False

console.log("Is age > 30 or city == 'Karachi'? I predict False.");
console.log(age > 30 || city == "Karachi"); // False

// Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes("apple")); // True  //i will use includes method for that it will checkif element is in the array.

console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes("mango")); // False

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes("mango")); // True // for ont i will add "!" symbol at the front of includes command.

console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes("banana")); // False

/* 
Because of .includes during compilation console was giving error:
    Property 'includes' does not exist on type 'string[]'. 
    Do you need to change your target library? Try changing the 'lib' compiler option to 'es2016' or later.
So after creating tsconfig.json file i changed the lib value to ["es2016", "dom"].
After doing this error was resolved.
*/
