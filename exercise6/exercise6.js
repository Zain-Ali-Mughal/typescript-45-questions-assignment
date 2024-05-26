/* Exercise 6: Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
// making a function stripwhitespace which will take string and return string
function stripWhiteSpace(name) {
    // making a command for removing whitespace and saving it in whiteSpace variable
    var whiteSpace = /^\s+|\s+$/g;
    // here ^ is in starting, \s isfor matching white space, + isfor more than one, | isfor OR, $ is end. g for global means full string.
    return name.replace(whiteSpace, "");
    // in return we are replacing white space with a empty '' string.
}
// Function is created now we will use it.
// here we are saving a name with space.
var nameWithWhiteSpace = "\t \n Zain Ali \t \n";
// printing name wirh white space.
console.log("Name with White Space: ".concat(nameWithWhiteSpace));
// here we are calling stripWhiteSpace function that we created above.
var nameWithoutWhiteSpace = stripWhiteSpace(nameWithWhiteSpace);
// printing name without whitesapce
console.log("Name without White Space: ".concat(nameWithoutWhiteSpace));
