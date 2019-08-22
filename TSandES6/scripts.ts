const add = (val1: number, val2: number):number => val1 + val2
console.log(add(5,10));

//spread
let numbers = [1,4,99,222,100];
console.log(Math.max(...numbers));
let makeArray = (...args: number[]) : number[] => {
    return args
}
console.log(makeArray(1,2,4,5,6))

let games = ["pubg","gta","maxpayne"];
let [game1, game2] = games;

console.log(game1, game2);
