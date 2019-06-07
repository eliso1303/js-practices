function CoffeeMachine(power) {
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;

    this.getTimeToBoil = function() {
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
}

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        console.log('Coffee is ready!');
    }, this.getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    waterAmount = amount;
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();