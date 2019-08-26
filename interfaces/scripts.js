"use strict";
var sayHello = function (person) {
    console.log(person.firstName);
};
var changeName = function (person) {
    person.firstName = "umer";
};
var person1 = {
    firstName: "faizan",
    age: 24,
    hobbies: ['cooking', 'singing'],
    greet: function (lastName) {
        console.log("Hi, i am " + this.firstName + " " + lastName + ".");
    }
};
sayHello(person1);
changeName(person1);
sayHello(person1);
person1.greet("ul haq");
