interface NamedPerson{
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

const sayHello = (person: NamedPerson) => {
    console.log(person.firstName)
}
const changeName = (person: NamedPerson) => {
    person.firstName = "umer";
}
let person1 = {
    firstName: "faizan",
    age: 24,
    hobbies: ['cooking', 'singing'],
    greet(lastName: string){
        console.log(`Hi, i am ${this.firstName} ${lastName}.`)
    }
}
sayHello(person1);
changeName(person1);
sayHello(person1);
person1.greet("ul haq");

class PersonClass implements NamedPerson{
    firstName: string;
    lastName: string
    greet(lastName: string): void {
        console.log(`Hi, i am ${this.firstName} ${this.lastName}.`)
    }
    constructor(firstname: string , lastName: string){
        this.firstName = firstname;
        this.lastName = lastName;
    }

    
}
const person3 = new PersonClass('faizan','ul haq')
console.log(person3.firstName);
console.log(person3.lastName);
person3.greet("blank");