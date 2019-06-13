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
                return true;
            } else {
                throw new Error('There is no such user');
            }
        } else {
            throw new Error('ID is not set or type is not string');
        }
    }

    find(query) {
        let userArr = [];
        if (query || typeof query === "object") {
            userArr = this.readAll().filter(user => {
                return (
                    user.name === query.name &&
                    user.country === query.country &&
                    ((query.age.min && query.age.max) ? (user.age >= query.age.min && user.age <= query.age.max) : 
                    query.age.min ? (user.age >= query.age.min) : 
                    query.age.max ? (user.age <= query.age.max) : false) &&

                    ((query.salary.min && query.salary.max) ? (user.salary >= query.salary.min && user.salary <= query.salary.max) : 
                    query.salary.min ? (user.salary >= query.salary.min) : 
                    query.salary.max ? (user.salary <= query.salary.max) : false)
                );
            });
            return userArr;
        } else {
            throw new Error("Query is not valid!");
        }
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'georgia', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);

const query = {
    name: 'Pitter',
    country: 'georgia',
    age: {
        min: 21
    },
    salary: {
        min: 500,
        max: 600
    }
};
const customers = db.find(query); // array of users
console.log(customers);