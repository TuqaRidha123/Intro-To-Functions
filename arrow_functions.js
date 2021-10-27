const add = function(x, y) {
    return x + y;
} 

const add = (x, y) => {
    return x + y;
} // compact syntax 

// add(9, 4) -> 13 

const square = (x) => {
    return x ** 2;
}

// square(9) -> 81

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// rollDie() to call, returns random nums

let greet = (str) => {
    return "Hey " + str + "!";
}

// greet("Hagrid") --> "Hey Hagrid!"

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
) // replacing curly braces with parentheses automatically 
// returns the output 
// super compact, no return statement 
// implicit return
// only works with single expressions

const add = (x, b) => {
    return a + b;
}

/*
const add = (x, b) => ()
    return a + b;
    return b + a;
) WON'T WORK!!!
*/

// OR

const add = (x, b) => a + b


// TO WRAP UP...
const movies = [
    {
        title: "Amadeus", 
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite", 
        score: 95
    },
    {
        title: "Alien", 
        score: 90
    }
]

// map over array & return new array with score divided by ten
const newMovies = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 10}`
})

// 
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

