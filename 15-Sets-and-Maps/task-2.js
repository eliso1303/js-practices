class DB {
    constructor() {
        this.db = new Map();
    }

    create(object) {
        this.validateFields(object);
        let _id = new Date().getUTCMilliseconds().toString();
        this.db.set(_id, object);
        return _id;
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

    validateFields(object) {
        if (typeof object !== 'object') {
            throw new Error('Must be an object');
        }

        const properties = ['name', 'age', 'country', 'salary'];

        for (let i = 0; i < properties.length; i++) {
            if (!object.hasOwnProperty(properties[i])) {
                throw new Error(property + ' is required');
            }
        }

        if (typeof object.name !== 'string' || typeof object.country !== 'string') {
            throw new Error('Property required to be string');
        }
        if (typeof object.age !== 'number' || typeof object.salary !== 'number') {
            throw new Error('Property required to be number');
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