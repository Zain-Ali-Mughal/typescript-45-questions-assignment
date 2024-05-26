/* Exercise 43: Unchanged Magicians: 
Start with your work from Exercise 41 42. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
 with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
function makeGreat(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

// Calling makeGreat with a copy of the magicians array
let greatMagicians = makeGreat([...magicians]);

// Display the original array
console.log("Original Magicians:");
showMagicians(magicians);

// Display the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
