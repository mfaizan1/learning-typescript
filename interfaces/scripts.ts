interface NamedPerson{
    firstName: string,
    age?: number,
    [propName: string]: any
}

const sayHello = (person: NamedPerson) => {
    console.log(person.firstName)
}
const changeName = (person: NamedPerson) => {
    person.firstName = "umer";
}
let person1 = {
    firstName: "faizan",
    age: 24
}
sayHello({
    firstName: "faizan",
    age: 24,
    hobbies: ['cooking', 'singing']
});
changeName(person1);
sayHello(person1);