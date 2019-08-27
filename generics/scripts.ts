//simple generic
function echo(data: any){
    return data;
}

console.log(echo('123').length);
console.log(echo(123).length);
console.log(echo({data: '123'}).length);

//better generic
function betterEcho<T>(data: T){
    return data;
}
console.log(betterEcho('123').length);
console.log(betterEcho<number>(123));
console.log(betterEcho({data: '123'}));

const arr :  Array<number> = [1,4,2,5,22];
arr.push(-222);
// arr.push('111') cannot do this now since we have made array not generic
console.log(arr);

const echo2 : <T>(data : T) => T = betterEcho;
console.log(echo2<string>('something'));

class simpleMath<T extends number>{
    baseValue: T;
    multiplyValue: T;
    mul(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const mth =  new simpleMath<number>();
mth.baseValue = 10;
mth.multiplyValue = 20;
console.log(mth.mul());