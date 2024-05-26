/* Exercise 42: Great Magicians: 
Start with a copy of your program from Exercise 41. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

// Array of magician's names
let magicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Dynamo",
  "Criss Angel",
  "Penn Jillette",
  "Teller",
];

// Function to print the name of each magician
function showMagicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

// Modifing the array
makeGreat(magicians);

// Calling the function to show modified array
showMagicians(magicians);
