// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ",a)
}
// console.log("OUTER: ",a);
// console.log(b);
// console.log(c);

function one() {
    const username = "AYUSH"
    function two(){
        const website = "YOUTUBE"
        console.log(website);
    }
    console.log(username);
    two()
}
one()

if (true) {
    const username = "ayush"
    if (username === "ayush") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++ intresting +++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))