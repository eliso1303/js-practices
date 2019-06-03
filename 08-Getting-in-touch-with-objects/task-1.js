const person = {
    saleryNum: 1500
};

Object.defineProperty(person, 'salary', {
    get() {
        let d = new Date();
        let monthDays = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        if (d.getDate() < (monthDays - 20)) {
            return this.saleryNum + ' Good salery';
        } else {
            return this.saleryNum + ' Bad salery';
        }
    },
});

console.log(person.salary);