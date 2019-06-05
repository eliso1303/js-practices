function CoffeeMachine(power) {
    let timerId;

    this.waterAmount = 0;
    const WATER_HEAT_CAPACITY = 4200;
    let self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

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

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready