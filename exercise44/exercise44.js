/* Exercise 44: Sandwiches:
Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/
// Making Function to make a sandwich with variable number of items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- ".concat(item));
    });
    console.log("Your sandwich is ready!\n");
}
// Calling the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato", "Onion", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
