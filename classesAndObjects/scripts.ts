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