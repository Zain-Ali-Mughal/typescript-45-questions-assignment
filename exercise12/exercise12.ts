/* Exercise 12. Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let friendNames: string[] = [
  "Baari",
  "Hanif",
  "Irfan",
  "Nabi Bux",
  "Zafar",
  "Dawood",
];

friendNames.forEach((friendName) => {
  console.log(`Hello, ${friendName}! have a great day.`);
});
