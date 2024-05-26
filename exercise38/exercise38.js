/* Exercise 38: Cities:
Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.
*/
//  Making function with country as default parameter.
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describeCity("Karachi"); // City with default country
describeCity("Lahore"); // City with default country
describeCity("New York", "USA"); // Custom city and country
