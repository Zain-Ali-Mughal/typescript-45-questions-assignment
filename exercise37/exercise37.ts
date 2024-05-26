/* Exercise 37: Large Shirts: 
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

// Making function with size and message as default.
function makeShirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}".`
  );
}

// Calling the function with default parameters
makeShirt(); // Large shirt with default message
makeShirt("Medium"); // Medium shirt with default message
makeShirt("Small", "Typescript is fun"); // Custom size and message
