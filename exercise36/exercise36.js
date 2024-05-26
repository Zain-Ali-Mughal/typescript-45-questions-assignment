/* Exercise 36: T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// Maing function
function makeShirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
// Calling the function with a size and message
makeShirt("Large", "Keep calm and code on");
