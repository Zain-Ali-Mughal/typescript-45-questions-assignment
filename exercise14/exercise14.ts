/* Exercise 14: Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/
let dinnerGuests: string[] = ["Albert Einstein", "Isaac Newton", "Elon Musk"];

// Print dinner invitations using forEach
dinnerGuests.forEach((guest) => {
  console.log(
    `Dear ${guest},\nI would like to invite you to dinner. It would be an honor to have your company.\nSincerely, [Zain Ali Mughal]`
  );
});
