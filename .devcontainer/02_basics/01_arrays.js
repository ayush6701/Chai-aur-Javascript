// array
const myArray = [0, 1, 2, 3, 4, 5, 6];
let myHeros = ["batman", "saitama", "winterSolder" ,"wolverine"];
let myArray2 = new Array (1, 2, 3, 4, 5)

// console.log(myArray[4]);
// console.log(myHeros[1]);
// console.log(myArray[4]);

// array methods

myArray.push(10);
myArray.push(9);
myArray.pop();

myArray.unshift(8);
myArray.shift();
// console.log(myArray);
// console.log(myArray.includes(11));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);

console.log("C ", myArray);