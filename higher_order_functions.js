// PASSING FUNCTIONS AS ARGUMENTS OF OTHER FUNCTIONS

function callTwice(func) {
    func();
    func();
}
// callTwice(1) won't work 
function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
} 

/* calling callTenTimes(rollDie) --> prints 
ten different rolls of die */

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
// callTwice(rollDie()) won't work
callTwice(rollDie)