class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
       return this.rate * this.days;
    }
}


let worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

let worker1 = new Worker('name1','surname1', 20, 10);
let worker2 = new Worker('name1','surname1', 30, 12);

let sum = worker1.getSalary() + worker2.getSalary();
console.log(sum);