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

