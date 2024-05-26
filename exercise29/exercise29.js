/* Exercise 29: Favorite Fruit:
Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// Making an Array of my favoritfruits.
var favoriteFruits = ["apple", "mango", "cherry"];
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("mango")) {
    console.log("You really like mangos!");
}
if (favoriteFruits.includes("cherry")) {
    console.log("You really like cherrys!");
}
if (favoriteFruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
