'use strict'
const person = {};

Object.defineProperty(person, 'rate', {
    writable: true,
    configurable: false,
    enumerable: false
});

Object.defineProperty(person, 'salary', {
    enumerable: true,
    get() {
        let d = new Date();
        if (this.rate) {
            return this.rate * d.getDate();
        } else {
            return 0;
        }

    }
});

person.rate = 30;
person.salary;