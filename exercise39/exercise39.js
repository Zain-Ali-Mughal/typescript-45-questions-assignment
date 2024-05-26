/* Exercise 39: City Names:
Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
// The cityCountry function is defined with two parameters: city (string) and country (string).
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
    //Return Statement:a string is formatted using template literals to concatenate the city and country.
}
// Calling the function with three city-country pairs
// The return value of each function call is printed using console.log
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Tokyo", "Japan"));
