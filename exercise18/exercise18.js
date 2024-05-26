var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Exercise 18: Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
// Storing locations in an array (not in alphabetical order)
var placesToVisit = [
    "Istanbul",
    "Paris",
    "California",
    "New York",
    "Venice",
];
// Printing array in its original order
console.log("Original Order:", placesToVisit);
// Printing array in alphabetical order without changing the actual list
// for that we are using spread operator [...] to make a shallo copy of array for sorting purpose.
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Showing that array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Printing array in reverse alphabetical order without changing the order of the original list
// Agian using [...] spread operator for shallow copy.
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Showing that array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Reversing the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reversing the order of the list again
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sorting the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
// Sorting the array in reverse alphabetical order
placesToVisit.reverse();
console.log("Reverse Alphabetical Order:", placesToVisit);
