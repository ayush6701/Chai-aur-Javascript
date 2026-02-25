// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ayush')


// normal function....

// function sayHello() {
//   console.log("Hello");
// }

// sayHello(); 

// IIFE (named)....

// (function() {
//   console.log("Hello");
// })();

// IIFE (un-named)....

// (() => {
//   console.log("Hello from arrow IIFE");
// })();