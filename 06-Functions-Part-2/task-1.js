const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

function bind(fun,link,...n){
    
}

const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f()); // My name: Pitter


// const f1 = obj.getName.bind('pitter');
// console.log(obj.getName);



// const data = {
//     value: 0,
//     getValue: function () {
//         return () => this.value;
//     },
//     getValue2: function () {
//         return function () {
//             return this.value;
//         }
//     }
// };

// console.log(data.getValue()());
// console.log(data.getValue2()());
// console.log('----------------------');

// const newData = {
//     value: 1
// };

// const f1 = data.getValue().bind(newData);
// const f2 = data.getValue2().bind(newData);

// console.log(f1());
// console.log(f2());