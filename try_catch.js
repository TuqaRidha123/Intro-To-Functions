/*
try {
    hello.toUpperCase();
} catch {
    console.lose("ERROR")
}
*/

function yell(msg) {
    console.log(msg.toUpperCase().repeat(3));
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string");
    }
}