/* Exercise 11: Names: Store the names of a few of your friends in a array called names.
   Print each person’s name by accessing each element in the list, one at a time.*/
// making an Array of names of friends in variable names.
var names = [
    "Baari",
    "Hanif",
    "Irfan",
    "Nabi Bux",
    "Zafar",
    "Dawood",
];
console.log("Names by Callback method.");
/* 1st method for calling the names from will be callback method
   in this method we will use .forEach this will iterate evey element in the Array
   and i will use => arrow for call back wich will take every element from array and
   execute it with the command given in the {} curly braces.
*/
names.forEach(function (name) {
    console.log(name);
});
console.log("-------------------------");
console.log("Names by for loop method.");
// 2nd method will be by using for loop
for (var i = 0; i < names.length; i++) {
    /* here i is index starting from 0 and less than total length of array
          and i++ is iterator which will add 1 in every iteration in index*/
    console.log(names[i]);
}
