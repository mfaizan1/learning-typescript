"use strict";
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "faizan"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersEx = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersEx));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray = newArray.concat(numbersEx);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var _a = [3.89, 2.99, 1.38], result1 = _a[0], result2 = _a[1], result3 = _a[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var _b = { firstName: "Will", experience: 12 }, firstName = _b.firstName, experience = _b.experience;
console.log(firstName, experience);
