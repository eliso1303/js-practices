class Customers {
    constructor() {
        this.customers = [];
    }

    add(object) {
        if (object && typeof object === "object") {
            if (object.name && typeof object.name === "string") {
                this.customers.push(object);
            }
            else {
                throw new Error("Name is required");
            }
        } else {
            throw new Error("not an object");
        }
    }

    *[Symbol.iterator] () {
        let varifedCustomers = this.customers.filter(customer => customer.verified);
        for (const customer of varifedCustomers) {
            yield customer;
        }
    }
}


const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}