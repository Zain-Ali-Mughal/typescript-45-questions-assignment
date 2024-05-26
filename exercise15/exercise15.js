/* Exercise 15: Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
// Main List
var myDinnerGuests = ["Albert Einstein", "Isaac Newton", "Elon Musk"];
// printing main list
console.log("Guest list before updating \n".concat(myDinnerGuests));
console.log("Mr. Albert Einstein can't make it so we have to update the inivitation list.");
console.log("------------------------------------------------------------------");
console.log("Guest list after updating.");
// now updating the guest list
// saving the guest name og gues who cant make it in variable.
var guestWhoCantMakeIt = "Albert Einstein";
// Now replacing the name in the list by using .indexOf
var nameToBeCanceled = myDinnerGuests.indexOf(guestWhoCantMakeIt);
// .indexOf function will find the index of name that have to b replaced.;
// Now this condition will check if that name is in the string, if its there it will be replaced with "Sam Altman".
if (nameToBeCanceled !== -1) {
    myDinnerGuests[nameToBeCanceled] = "Sam Altman";
}
// Printing updated dinner invitations using .forEach
myDinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nI would like to invite you to dinner. It would be an honor to have your company.\nSincerely, [Zain Ali Mughal]"));
});
