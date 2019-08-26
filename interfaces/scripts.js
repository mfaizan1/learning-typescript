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
var PersonClass = /** @class */ (function () {
    function PersonClass(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
    PersonClass.prototype.greet = function (lastName) {
        console.log("Hi, i am " + this.firstName + " " + this.lastName + ".");
    };
    return PersonClass;
}());
var person3 = new PersonClass('faizan', 'ul haq');
console.log(person3.firstName);
console.log(person3.lastName);
person3.greet("blank");
var myMulFunc;
myMulFunc = function (num1, num2) {
    return num1 * num2;
};
console.log(myMulFunc(4, 5));
