"use strict";
var myName = "faizan";
var isMarried = false;
var myAge;
myAge = 24;
var fruits = ['apple', 'banana', 'mango'];
fruits = ['cost', 10];
var cars = ['Honda', 'Faw', 'BMW'];
var numberArray = [1, 2, 3, 4];
var addressTuple = ["thisstreet", 99];
//if dont assign values to variables, number values will be assigned
//if you give an arbitary number values to any of the variable next will 
//follow that sequence
var colors;
(function (colors) {
    colors["grey"] = "grey";
    colors["black"] = "black";
    colors["green"] = "green";
})(colors || (colors = {}));
var myColor = colors.black;
console.log(myColor);
function getName() {
    return myName;
}
console.log(getName());
function doSomething() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
doSomething();
function mutiply(num1, num2) {
    return num1 * num2;
}
console.log(mutiply(4, 9));
