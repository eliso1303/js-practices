function CoffeeMachine(power, capacity) {
    const innerPower = power;
    
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
    };
    
    this.getPower = function() {
        return innerPower;
    }
}

let coffeeMachine = new CoffeeMachine(500,10);
console.log(coffeeMachine.getPower());