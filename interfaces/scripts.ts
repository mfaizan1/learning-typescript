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