"use strict";
var add = function (val1, val2) { return val1 + val2; };
console.log(add(5, 10));
//spread
var numbers = [1, 4, 99, 222, 100];
console.log(Math.max.apply(Math, numbers));
var makeArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(makeArray(1, 2, 4, 5, 6));
