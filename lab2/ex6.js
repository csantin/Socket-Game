class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
// Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.details());
console.log(sedan.info());