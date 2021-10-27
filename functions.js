// generate a random num between 1 - 6
// let num = Math.floor(Math.random() * 6) + 1;

// define -> run
/* function funcName() {
    // do something
} */

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
// singSong() <- to execute

function printHeart() {
    console.log("<3");
}
printHeart();

function greet(firstName) {
    console.log(`firstName is: ${firstName}`);
    //console.log("Hi!");
}

 function greet2(firstName2) {
     console.log(`Hey there, ${firstName2}!`);
 }

 function greet3(firstName3, lastName3) {
     console.log(`Hey there, ${firstName3} ${lastName3[0]}.`);
 }

 // order of parameters matters
 greet3("George", "Clooney");
 
 function repeat(str, numTimes) {
     let result = "";
     for (let i = 0; i < numTimes; i++) {
         result += str;
     }
     console.log(result);
 }
 repeat("hi", 5); // order matters

// Multiple Args Exercise 
 function isSnakeEyes(num1, num2){
    if(num1 == 1 && num2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

function add(x, y) {
   // console.log(x + y);
   if (typeof x !== "number" || typeof y !== "number"){
       return false;
   }
    return x + y;
   // console.log("End of function"); --> this line will never run bcs of return
}

// Return Value Practice 
function multiply(x, y){
    return x * y;
}

//isShortsWeather Function
function isShortsWeather(temperature){
    if (temperature >= 75){
        return true;
    } else {
        return false;
    }
}

// Last Element Exercise 
function lastElement(arg) {
    if (arg.length === 0) {
        return null;
    } else {
        return arg[arg.length -1];
    }
}

/* solutions:     lastElement([3, 5, 7]) -> 7
                  lastElement([1]) -> 1
                  lastElement([]) -> null
*/

// Capitalize Exercise 
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* solutions:     capitalize("eggplant") -> "Eggplant"
                  capitalize("pamplemousse") -> "Pamplemousse"
                  capitalize("squid") -> "Squid"
*/

//Sum Array Exercise 
function sumArray(arr) {
    let tot = 0;
    for (let x = 0; x < arr.length; x++){
        tot = tot + arr[x];
    }
    return tot;
}

/* solutions:     sumArray([1, 2, 3]) -> 6
                  sumArray([2, 2, 2, 2]) -> 8 
                  sumArray([50, 50, 1]) -> 101
*/

//Days Of The Week Exercise 
function returnDay(num){
    const days = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num < 1 || num > 7){
        return days[0];
    }
    return days[num];
}

/* solutions:     returnDay(1) --> "Monday"
                  returnDay(7) --> "Sunday"
                  returnDay(4) --> "Thursday"
                  returnDay(0) --> null
*/