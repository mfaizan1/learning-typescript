
// Exercise 1 - How was your TypeScript Class?
class Car{
    acceleration: number = 0;
    name: string;
    constructor(name: string){
        this.name = name;
    }
    honk(){
        console.log("Toooooooooot!");
    }
   accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseClass {
    width: number = 0;
    length: number = 0;
}
class Rectangle extends baseClass{
constructor(){
    super()
    this.width = 5;
    this.length = 2;
}
calcSize(){
    return this.width * this.length;
}
}
let rectangle =  new Rectangle();
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2{
    _firstname: string = "";
    set firstName(name: string){
        if (name.length > 3) {
            this._firstname = name;
        }
        else {
            this._firstname = "";
        }
    }
    get firstName(): string{
        return this._firstname;
    }
}
const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Fa";
console.log(person2.firstName);
person2.firstName = "Faizan";
console.log(person2.firstName);