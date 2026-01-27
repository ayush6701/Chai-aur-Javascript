let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myBirthDate = new Date (2001, 6, 6)
// let myBirthDate = new Date (2001, 6, 6, 1, 30)
// let myBirthDate = new Date ("2001-07-06") ------  YYYY-MM-DD
// let myBirthDate = new Date ("07-06-2001") ------ MM-DD-YYYY
// console.log(myBirthDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
