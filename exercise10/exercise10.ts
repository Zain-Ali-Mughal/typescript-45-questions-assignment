/* Exercise 10: Adding Comments: 
Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write 
because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.
*/

// making a function stripwhitespace which will take string and return string

function stripWhiteSpace(name: string): string {
  // making a command for removing whitespace and saving it in whiteSpace variable

  let whiteSpace = /^\s+|\s+$/g;

  // here ^ is in starting, \s isfor matching white space, + isfor more than one, | isfor OR, $ is end. g for global means full string.

  return name.replace(whiteSpace, "");

  // in return we are replacing white space with a empty '' string.
}
// Function is created now we will use it.

// here we are saving a name with space.
let nameWithWhiteSpace = "\t \n Zain Ali \t \n";

// printing name wirh white space.
console.log(`Name with White Space: ${nameWithWhiteSpace}`);

// here we are calling stripWhiteSpace function that we created above.
let nameWithoutWhiteSpace = stripWhiteSpace(nameWithWhiteSpace);

// printing name without whitesapce
console.log(`Name without White Space: ${nameWithoutWhiteSpace}`);
