"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseClass = /** @class */ (function () {
    function baseClass() {
        this.width = 0;
        this.length = 0;
    }
    return baseClass;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this.width = 5;
        _this.length = 2;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseClass));
var rectangle = new Rectangle();
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person2 = /** @class */ (function () {
    function Person2() {
        this._firstname = "";
    }
    Object.defineProperty(Person2.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstname = name;
            }
            else {
                this._firstname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
var person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Fa";
console.log(person2.firstName);
person2.firstName = "Faizan";
console.log(person2.firstName);
