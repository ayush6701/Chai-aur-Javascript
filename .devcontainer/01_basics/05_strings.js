const name = "Ayush"
const repoCount = 10

// console.log(name+repoCount); -------- wrong way

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Ayush-xz-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);
console.log(gameName.substring(0, 4));

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ayush.com/Ayush%20Singh"
console.log(url.replace('%20', '-'))
console.log(url.includes('abc'))

console.log(gameName.split('-'));