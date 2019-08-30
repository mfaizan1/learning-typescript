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

class Project2 {
    // @overrideAble(false)
    projectName : string;
    constructor(projectName: string){
        this.projectName = projectName;
    }
    @editable(false)
    calcBudget(){
        console.log(1000);
    }
}

function editable(value: boolean){
    return function(target : any ,propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}
function overrideAble(value: boolean): any{

    return function(target : any ,propName: string){
        const newDescriptor : PropertyDescriptor = {
            writable : value
        }
        return newDescriptor;
    }
}
const project = new Project2("first project");
console.log(project);
project.calcBudget();
// project.calcBudget = function(){
//     console.log(3000);
// }
project.calcBudget();