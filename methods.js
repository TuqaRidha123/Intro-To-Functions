/* examples of methods:
"hello".toUpperCase()
[1, 2, 3].indexOf(2)
function add(x, y) {return x + y}
add(1, 2)
Math
*/

// FUNCTIONS & METHODS


/* myMath is an object 
the function is the method */

const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

/* myMath --> {PI: 3.14159, square: f, cube: f}
myMath.PI --> 3.14159
myMath.square --> f
myMath.square(2) --> 4
myMath.cube(2) --> 8 */

// shortcut syntax 

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

// Methods Exercise 
let square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}