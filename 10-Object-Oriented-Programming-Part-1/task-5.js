function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    let timerId;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        timerId = setTimeout(function(){
            timerId = void 0;
            onReady();
        }, getTimeToBoil());
    };

    this.setOnReady = function (readyFunc) {
        onReady = readyFunc;
    }

    this.isRunning = function () {
        return !!timerId;
    }

    this.stop = function () {
        if (timerId) {
            clearTimeout(timerId);
            timerId = void 0;
            console.log('coffee isn\'t ready');
        } else {
            throw new Error("coffee making don't started");
        }
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); 

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning());

coffeeMachine.setOnReady(function () {
    console.log('After: ' + coffeeMachine.isRunning()); 
});