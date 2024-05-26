/* Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
have an empty list at the end of your program.

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
// Printing only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
// Now removing guests until only two names remain and for that we will use while loop
while (dinnerGuests.length > 2) {
    // In above line we are telling that until length of array is greater than 2.
    var removedGuest = dinnerGuests.pop();
    // Here we are removing guest one by one using .pop()
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    // here we are printing a messege to removed guests.
}
// Print messages to the remaining two people
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou're still invited to dinner. See you there!\nSincerely, [Zain Ali Mughal]"));
});
// Removing the last two names from the list using .pop()
dinnerGuests.pop();
dinnerGuests.pop();
// Printing the list to confirm it's empty
console.log("Final guest list:", dinnerGuests);
