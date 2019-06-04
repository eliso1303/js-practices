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
    },
    set () {
        throw new Error('Cannot set property salary');
    }
});

person.rate = 30;
person.salary = 30;
person.salary;