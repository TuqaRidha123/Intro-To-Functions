/* functions that can: 
  - accept other functions as arguments
  - return a function 
*/

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log("CONGRATS, i am a good function!");
            console.log("You win a million dollars!");
        }
    } else {
        return function() {
            alert("YOU have been infected by a computer virus!");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            }
        }
    }
}

// each time it should return a random function
// can capture the function in a variable: 
// const mystery = makeMysteryFunc()
// call on mystery & it should return a random function as well

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(100, 200);  <-- returns num >= 100 && num <= 200;
// capture it in a variable 
// const isChild = makeBetweenFun(0, 18)
// isChild(40) --> false
// const isAdult = makeBetweenFun(19, 64)
// isAdult(50) --> true

/*
makeBetweenFunc(5, 10);

function isBetween(num) {
    return num >= 50 && num <= 100;
}

function isBetween(num) {
    return num >= 1 && num <= 10;
}
*/