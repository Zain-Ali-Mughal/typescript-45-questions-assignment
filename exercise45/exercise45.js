/* Exercise 45: Cars:
Write a function that stores information about a car in a Object. The function should always receive
a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
// Writing a function that stores a car info with optional parameters.
function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Now making car info object
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Now adding optional parameters to car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling this function to create a car object.
var myCarInfo = carInfo("Toyota", "Grande", "Color: Black", "mileage: 1.8");
// Priniting the car information.
console.log(myCarInfo);
