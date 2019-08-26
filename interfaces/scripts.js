"use strict";
var sayHello = function (person) {
    console.log(person.firstName);
};
var changeName = function (person) {
    person.firstName = "umer";
};
var person1 = {
    firstName: "faizan",
    age: 24
};
sayHello(person1);
changeName(person1);
sayHello(person1);
