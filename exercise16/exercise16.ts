/* Exercise 16: More Guests: 
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you 
found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

// Original list
let dinnerGuests: string[] = [
  "Albert Einstein",
  "Sam Altman",
  "Isaac Netwon",
  "Elon Musk",
];

// Printing original list
console.log(`Original dinner guests list:\n\t\t\t\t${dinnerGuests}`);

// Giving bigger table news
console.log("Great news! We found a bigger dinner table!");

// Adding one new guest at the beginning of array
dinnerGuests.unshift("Bill Gates");

// Add one new guest to the middle of the array
let middlePosition: number = Math.floor(dinnerGuests.length / 2);
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
dinnerGuests.forEach((guest) => {
  console.log(
    `Dear ${guest},\nI would like to invite you to dinner. It would be an honor to have your company.\nSincerely, [Zain Ali Mughal]`
  );
});
