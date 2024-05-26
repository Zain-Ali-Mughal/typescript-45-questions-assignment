/* Exercise 43: Unchanged Magicians:
Start with your work from Exercise 41 42. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
 with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician's names
var magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Dynamo",
    "Criss Angel",
    "Penn Jillette",
    "Teller",
];
// Function to print the name of each magician
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Calling makeGreat with a copy of the magicians array
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Display the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Display the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
