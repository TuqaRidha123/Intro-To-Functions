// the keyword "this"

const cat = {
    name: "Blue Steele", 
    color: "Grey", 
    breed: "Scottish Fold", 
    meow() {
       console.log("MEOW MEOW MEOW");
    }
}

/* cat.meow() --> MEOW MEOW MEOW */

const cat = {
    name: "Blue Steele", 
    color: "Grey", 
    breed: "Scottish Fold", 
    meow() {
       console.log(this.color);
    }
}

/* cat.meow() --> Grey */

const cat = {
    name: "Blue Steele", 
    color: "Grey", 
    breed: "Scottish Fold", 
    meow() {
       console.log(`${this.name} says MEOW`);
    }
}

/* cat.meow() --> Blue Steele says MEOW */ 

const meow2 = cat.meow;

// meow2() --> says MEOW
// cat.meow() --> Blue Steele says MEOW

// Egg Laying Exercise

let hen = {
    name: "Helen", 
    eggCount: 0, 
    layAnEgg(){
        this.eggCount++;
        return ('EGG');
    }
}

/* 
he.name --> "Helen"
hen.eggCount --> 0
hen.layAnEgg() --> "EGG"
hen.layAnEgg() --> "EGG"
hen.eggCount --> 2
*/