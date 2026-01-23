// primitive data types

// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100  //number
const scorevalue = 100.3  //number

const isLoggedIn = false  //boolean
const outsideTemp = null //null
let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

// Array

const heros = ["shaktiman", "naagraj", "doga"];

// Object

let myObj = {
    name: "hitesh",
    age: 22,
}

// Function

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3