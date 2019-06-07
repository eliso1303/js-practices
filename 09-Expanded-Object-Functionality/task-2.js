Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(source) {
        for (item of Object.getOwnPropertyNames(source)) {
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
            }
        }
        return this
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