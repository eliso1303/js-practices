const person = {
    salaryNum: 1500
};

Object.defineProperty(person, 'salary', {
    get() {
        let d = new Date();
        let monthDays = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        if (d.getDate() < (monthDays - 20)) {
            return 'Good salary';
        } else {
            return 'Bad salary';
        }
    },
});

console.log(person.salary);