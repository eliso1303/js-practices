class DB {
    constructor() {
        this.db = new Map();
    }

    create(object) {
        if (object || typeof object === "object") {
            if (object.name || typeof object.name === 'string' || object.age || typeof object.age === 'number' || object.country || typeof object.country === 'string' || object.salary || typeof object.salary === 'number') {
                let _id = new Date().getUTCMilliseconds().toString();
                this.db.set(_id, object);
                return _id;
            } else {
                throw new Error('Invalid property');
            }
        } else {
            throw new Error('Must be an object');
        }
    }

    read(userId) {
        if (userId || typeof userId === 'string') {
            if (this.db.has(userId)) {
                this.db.get(userId).id = userId;
            } else {
                return null;
            }
        } else {
            throw new Error('ID is not set or type is not string');
        }
    }

    readAll(value) {
        if (!value) {
            return Array.from(this.db.values());
        } else {
            throw new Error('Please, don\'t set parameter');
        }
    }

    update(id, changes) {
        if (!id || typeof id !== 'string') {
            throw new Error('ID must be excisting string');
        }

        if (!changes || typeof changes !== 'object') {
            throw new Error('invalid entry');
        }

        if (this.db.has(id)) {
            let user = this.db.get(id);
            this.db.set(id, { ...user, ...changes });
            return id;
        } else {
            throw new Error('There is no such user');
        }
    }

    delete(userId) {
        if (userId || typeof userId === 'string') {
            if (this.db.has(userId)) {
                this.db.delete(userId);
                console.log(true);
                return true;
            } else {
                throw new Error('There is no such user');
            }
        } else {
            throw new Error('ID is not set or type is not string');
        }
    }

    find(query) {
        if (query || typeof query === "object") {
            let arr = [];

            this.db.forEach((value, key, ownMap) => {
                if (this.db.get(key).name === query.country && (this.db.get(key).age.min || this.db.get(key).age.max) && (this.db.get(key).salary.min || this.db.get(key).salary.max)) {
                    arr.push(this.db.get(key));
                }
                return arr;
            });

            return Array;
        } else {
            throw new Error("Query is not valid!");
        }
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customersFind = db.find(query); // array of users
console.log(customersFind);