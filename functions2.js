// FUNCTION SCOPE

/* let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs); */

let bird = "Scarlet Macaw"
function birdWatch() {
   // let bird = "Great Blue Heron";
    console.log(bird);
}
birdWatch()

let radius = 8;
if (radius >0) {
    const PI = 3.14159;
    let msg = "Hi!";
}

console.log(radius);
// console.log(PI); WILL NOT WORK
/* to fix the problem of not being able to access
variables outside the function, use var */

for (let i = 0; i < 5; i++) {
    var msg = "ABCDEDGHIJK";
    console.log(msg);
}
console.log(msg); // var allows this to execute
console.log(i); // var allows this to execute 

/* const and let were created to 
follow scope rules */


// nesting functions
function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Catwoman"];
    function cryForHelp(){
        function inner(){
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase}`);
            }
        }
        inner();
    }
    cryForHelp();
}

/* inner functions have access 
to variables declared in parent 
functions but it doesn't work 
in the reverse way */