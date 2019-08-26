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
sayHello({
    firstName: "faizan",
    age: 24,
    hobbies: ['cooking', 'singing']
});
changeName(person1);
sayHello(person1);
