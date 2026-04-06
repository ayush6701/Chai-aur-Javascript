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

// splice

// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// arr.splice(3, 0, 4);
// console.log(arr); ---- add element in an array.

// let arr = [1, 2, 3, 4, 5, 99, 6, 7, 8, 9, 10];
// arr.splice(5, 1)
// console.log(arr); ---- remove element in an array.

// let arr = [1, 2, 3, 4, 99, 6, 7, 8, 9, 10];
// arr.splice(4, 1, 5);
// console.log(arr); ---- replace 1 element in an array.

// let arr = [1, 2, 3, 4, 99, 88, 77, 8, 9, 10];
// arr.splice(4, 3, 5, 6, 7);
// console.log(arr); ---- replace multiple elements in an array (3 in this case).