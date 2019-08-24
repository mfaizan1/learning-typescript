class Person{
    name: string;
    private type: string = "";
    protected age: number = 0;
    constructor(name: string, public username: string){
        this.name = name;
    }
    getAge(): number{
        return this.age;
    }
    setAge(age: number): void{
        this.age = age
    }
    getType(): string{
        return this.type;
    }
    setType(type: string): void{
        this.type = type;
    }
}
const person = new Person("faizan","fazi");
console.log(person.name, person.username);
console.log(person.getAge());
person.setAge(24);
console.log(person.getAge());
person.setType("wierd");
console.log(person.getType());


class Faizan extends Person{
    name: string = "faizan";
    constructor(username: string){
        super("faizan",username)
    }
}
const faizan = new Faizan("fazi" );
console.log(faizan);

class Plant {
    private _species: string = "default";
    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }else {
            this._species = "don't know"
        }
    }
    get species(){
        return this._species;
    }
}
const plant = new Plant();
console.log(plant.species);
plant.species = "hello";
console.log(plant.species);
plant.species = 'hi';
console.log(plant.species);
