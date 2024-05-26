/* Exercise 19: Dinner Guests:
Working with one of the programs from Exercises 14 through 17, print a message indicating the number of people
you are inviting to dinner.
*/
// Original list
var dinnerGuests = [
    "Albert Einstein",
    "Sam Altman",
    "Isaac Netwon",
    "Elon Musk",
];
// Printing original list
console.log("Original dinner guests list:\n\t\t\t\t".concat(dinnerGuests));
// Giving bigger table news
console.log("Great news! We found a bigger dinner table!");
// Adding one new guest at the beginning of array
dinnerGuests.unshift("Bill Gates");
// Add one new guest to the middle of the array
var middlePosition = Math.floor(dinnerGuests.length / 2);
/* In this line we used dinnerGuests.length / 2 to divided array to find its middle position
      and Math.floor() is used to convert that middle position number into near interger and
      we saved that position in middlePosition variable.*/
dinnerGuests.splice(middlePosition, 0, "Jensen Huang");
/* In this line we used .splice function to add a new name at the middle position of array that
     we found in previous line
     Here 0, means that no elements will be removed from the array. Instead, the new element will be inserted at that position,
     and all subsequent elements will be shifted one position to the right.
  */
// Using .push to add one new guest to the end of the list
dinnerGuests.push("Steve Jobs");
// Printing new set of invitation messages using .forEach
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nI would like to invite you to dinner. It would be an honor to have your company.\nSincerely, [Zain Ali Mughal]"));
});
// Printing the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(dinnerGuests.length));
