let myName: string = "faizan";
let isMarried: boolean = false;
let myAge : number;
myAge = 24;

let fruits : any[] = ['apple','banana','mango'];
fruits = ['cost',10];
let cars : string[] = ['Honda','Faw','BMW'];
let numberArray : number[] = [1,2,3,4];

let addressTuple: [string, number] = ["thisstreet", 99];
//if dont assign values to variables, number values will be assigned
//if you give an arbitary number values to any of the variable next will 
//follow that sequence
enum colors {
  grey = "grey",
  black = "black",
  green = "green"
}
let myColor : colors = colors.black;
console.log(myColor);

function getName() : string{
  return myName;
}

console.log(getName());

function saySomething(): void {
    console.log("hello");
}
saySomething();

function mutiply(num1: number, num2: number){
  return num1 * num2;
}
console.log(mutiply(4,9));

let someFunction: (val1: number, val2: number) => number;
someFunction = mutiply;
console.log(someFunction(4,2));

let user: {name: string, age: number} = {
  name:'faizan',
  age: 24
}
console.log(user);
type complex = {data: number[], output: (val: boolean) => number[]}
let complexObject: complex ={
  data : [1,2,4,5],
  output: function(val){
    return this.data;
  }

}
console.log(complexObject.data);
console.log(complexObject.output(true));

let multipleType: number | string = 27;
multipleType = '12';
