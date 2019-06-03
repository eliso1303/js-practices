const person = {
    saleryNum: 1500
};

Object.defineProperty(person, 'salary', {
    get() {
        
    },
});

Object.defineProperty(person, 'rate', {
    enumerable: false,
    get() {
        return this.name;
    },
});

person.rate = 30;
person.salary;