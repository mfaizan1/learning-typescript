function logged(constructorFn: Function){
    console.log(constructorFn);
}
@logged
class Person3{

}


function printable( constructorFn : Function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
}
@printable
class Plant2 {
    name = 'Plum tree';
}
const newPlant = new Plant2();
(<any>newPlant).print();