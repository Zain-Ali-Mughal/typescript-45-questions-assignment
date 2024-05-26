/* Exercise 15: Changing Guest List: 
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

// Main List
let myDinnerGuests: string[] = ["Albert Einstein", "Isaac Newton", "Elon Musk"];
// printing main list
console.log(`Guest list before updating \n${myDinnerGuests}`);

console.log(
  `Mr. Albert Einstein can't make it so we have to update the inivitation list.`
);

console.log(
  "------------------------------------------------------------------"
);

console.log(`Guest list after updating.`);

// now updating the guest list
// saving the guest name og gues who cant make it in variable.
let guestWhoCantMakeIt: string = "Albert Einstein";

// Now replacing the name in the list by using .indexOf
let nameToBeCanceled: number = myDinnerGuests.indexOf(guestWhoCantMakeIt);
// .indexOf function will find the index of name that have to b replaced.;

// Now this condition will check if that name is in the string, if its there it will be replaced with "Sam Altman".
if (nameToBeCanceled !== -1) {
  myDinnerGuests[nameToBeCanceled] = "Sam Altman";
}

// Printing updated dinner invitations using .forEach
myDinnerGuests.forEach((guest) => {
  console.log(
    `Dear ${guest},\nI would like to invite you to dinner. It would be an honor to have your company.\nSincerely, [Zain Ali Mughal]`
  );
});
