// functions

function sayMyName(){
    console.log("A"),
    console.log("Y"),
    console.log("U"),
    console.log("S"),
    console.log("H")
}

// sayMyName()

// adding two numbers 
// method 1 --- using console.log inside the function.

function addTwoNumbers(a, b){

     console.log("result : ", a + b);
 }
 addTwoNumbers(5, 5);

// method 2 --- mostly used (best practice)

function addTwoNumbers(a, b){
    return a + b
}

let result = addTwoNumbers(5, 6);
console.log("result 2 : ", result);

// method 3 --- for learning 

function addTwoNumbers(a, b){
    let sum = a + b
    return sum;
}
let result3 = addTwoNumbers(5, 7) 
console.log("result 3 : ", result3);

function loginUserMessage (username){
    // if(username === undefined)
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ayush"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));