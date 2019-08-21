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

function doSomething(): void {
  for(let i = 0 ; i< 10; i++ ){
    console.log(i);
  }
}
doSomething();

function mutiply(num1: number, num2: number){
  return num1 * num2;
}
console.log(mutiply(4,9));