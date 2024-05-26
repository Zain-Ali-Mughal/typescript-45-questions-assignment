/* Exercise 41: Magicians: 
Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
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

// Making Function to print the name of each magician
function showMagicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Calling the function.
showMagicians(magicians);
