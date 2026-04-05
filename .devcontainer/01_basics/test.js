// checking the type of each datatype in javascript.

// 1. Primitive datatype. 

let myName = "Ayush";
console.log(typeof myName);

let myAge = 24;
console.log(typeof myAge);

let amMale = true;
console.log(typeof amMale);

let mySymbol = Symbol("SHOGUN");
console.log(typeof mySymbol);

let bigInt = 12345678910n;
console.log(typeof bigInt);

let isEmployed = null;
console.log(isEmployed === null);

let loveLife;
console.log(typeof loveLife);

// 2. non-Primitive datatype. 

let myBikes = ["MT-09", "Z-900", "CBRRR-1000 Fireblade SP", "KATANA", "S-1000RR"];
console.log(Array.isArray(myBikes));

let myObject = {
    myname: "Ayush",
    myage: "24",
    mygender: "male",
    mycity: "bhopal"
};
console.log(typeof myObject);

let myFunction = function(){};
console.log(typeof myFunction);