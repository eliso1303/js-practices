Object.prototype.delay = function(delayTime){
    let self = this;
    return (...allArgument) => {
        setTimeout(() => self(...allArgument),delayTime);
    }
}
function f() {
    console.log('hello');
}
 // print "hello" after 1 second


function f2(a, b) {
    console.log(a + b);
}
f.delay(1000)();
f2.delay(1000)(1, 2); // print 3 after 1 second

