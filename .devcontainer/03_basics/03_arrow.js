const user = {
    username: "Ayush",
    price: 900,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "nobita"
user.welcomeMessage()

console.log(this);

// function chai (){
//     let username = "Ayush"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "Ayush"
//     console.log(this.username);
// }
// chai()

// discussing arrow function from here....

const chai = () => {
    let username = "Ayush"
    console.log(this.username);
}
// chai()

// arrow function in explicit return....

// const addTwo = (num1, num2) => {
//    return num1 + num2
// }

// console.log(addTwo(5, 5));

// arrow function in iplicit return....

const minus = (num1, num2) => (num1 - num2)

console.log(minus(20, 10));

// wrapping object in arrow function....

const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(3, 4))

// const myArray = [2, 4, 6, 8, 10];
// myArray.forEach()