namespace myMath{
    const PI = 3.14;
    export function calcCircuference(diameter: number){
        return diameter* PI;
    }
    export function calcRect(length: number, width: number){
        return width * length;
    }
}

console.log(myMath.calcCircuference(29));
console.log(myMath.calcRect(10,20));