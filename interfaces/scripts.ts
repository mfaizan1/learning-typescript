interface NamedPerson{
    firstName: string
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
sayHello(person1);
changeName(person1);
sayHello(person1);