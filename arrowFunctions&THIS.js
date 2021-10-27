const person = {
    firstName: "Viggo", 
    lastName: "Mortensen", 
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
} // returns "Viggo Mortensen"

/*
what happens if we replace 
it with an arrow function??
*/

const person = {
    firstName: "Viggo", 
    lastName: "Mortensen", 
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    }
} // returns "undefined undefined"

// let's try this...
const person = {
    firstName: "Viggo", 
    lastName: "Mortensen", 
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    }, 
    shoutName: function() {
        setTimeout(function() {
            console.log(this.fullName)
        }, 3000)
    }
}
// call shout name 
// set a timeout for 3 sec 
// call this.fullName 
// print results --> ERROR

// HOW DO WE FIX IT?
const person = {
    firstName: "Viggo", 
    lastName: "Mortensen", 
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }, 
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName)
        }, 3000)
    }
}

/* -- main takeaway --
the keyword "this" behaves 
differently with arrow functions 
*/