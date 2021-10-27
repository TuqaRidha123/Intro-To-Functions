setTimeout(() => {
    console.log("Hello!");
}, 3000);

// waits 3 secs then prints "Hello!"

console.log("Hello!");
setTimeout(() => {
    console.log("...are you still there?");
}, 3000);

console.log("Goodbye!");

//////////////////////////////

setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id) should stop it from running