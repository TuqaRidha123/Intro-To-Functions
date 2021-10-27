// example 
const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
}) // returns true 

words.every(word => word[0] === "d"); //returns false 

words.every(w => {
    let last_letter = w[w.length -1];
    return last_letter === "g";
}) // retruns true

// example 2 
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every(score => score >= 75) // true bcs all scores > 75
exams.every(score => score >= 70) // false 

exams.some(score => score >= 75) // true ... some refers to "any"

// example 3
const movies = [
    {
        title: "Garbage Movie #1", 
        score: 35,
        year: 1945
    },
    {
        title: "Garbage Movie #2", 
        score: 11,
        year: 1990
    },
    {
        title: "Garbage Movie #3",
        score: 23,
        year: 2000
    },
    {
        title: "Amadeus", 
        score: 99,
        year: 2014
    },
    {
        title: "Stand By Me",
        score: 85, 
        year: 2011
    },
    {
        title: "Parasite", 
        score: 95, 
        year: 2019
    },
    {
        title: "Alien", 
        score: 90,
        year: 1978
    }
]

movies.some(movie => movie.year > 2015) 
/* true but doesn't return which movies.
can use "filter" to create new array of 
movies.year > 2015 */

// example 4
function allEvens(arr) {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
} 

/* 
define a function call allEvens that 
accepts a single array of numbers. If
the array contains all even numbers, return 
true. Otherwise, return false. 
Use some or every to help you. Only one 
is actually useful here.
*/