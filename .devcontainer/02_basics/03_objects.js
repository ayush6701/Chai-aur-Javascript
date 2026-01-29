// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ayush",
    "full name": "Ayush singh",
    [mySym]: "mykey1",
    age: 24,
    location: "bhopal",
    email: "ayush20lv@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednusday"]
}

// console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"])
console.log(typeof jsUser.lastLoginDays)
console.log(typeof jsUser[mySym]);

jsUser.email = "ayush20lv@google.com"
Object.freeze(jsUser)
jsUser.email = "ayush20lv@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());