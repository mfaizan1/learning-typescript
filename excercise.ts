
type bankAccountType = {money: number, deposit: (val1: number) => void}
let bankAccount: bankAccountType  = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself : {name: string, bankAccount: bankAccountType , hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
