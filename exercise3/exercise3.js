/* Exercise 3: Name Cases: Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase, and titlecase.
*/
var personName = "Zain Ali";
// Print in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Print in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print in titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, function (match) { return match.toUpperCase(); }));
/*Here i used replace()function and in thatfunction i used a regex function (/\b\w/g)
Here,
        / = is used for starting and ending of function.
        \b = is used to set boundry at starting / so it will match with only starting letterof word.
        \w = is used for matching with word.
        g = is global function used so that this function will work on whole not only single word.
*/
