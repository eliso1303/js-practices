// 'use strict'
Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(source) {
        for (let item of Object.keys(source)) {
            if (this.hasOwnProperty(item)) {
                if (typeof this[item] !== "object") {
                    this[item] = source[item];
                } else {
                    if (Array.isArray(this[item])) {
                        this[item] = this[item].concat(source[item]);
                    } else {
                        this[item] = this[item].mergeDeepRight(source[item]);
                    }
                }
            } else {
                console.log(this);
                this.item = source[item];
                // this[item] = source[item];
            }
        }
        return this;
    }
})

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

let makeString = JSON.stringify(
    data.mergeDeepRight({
        age: 40,
        contact: {
            email: 'baa@example.com',
            favorite: true,
            meta: {
                tags: ['vip']
            }
        }
    }));

console.log(makeString);

// data will be
// {
// 	name: 'fred',
// 	age: 40,
// 	contact: {
// 		email: 'baa@example.com',
//         favorite: true,
// 		meta: {
//             verified: true,
//             tags: ['vip', 'important']
//         }
// 	}
// }