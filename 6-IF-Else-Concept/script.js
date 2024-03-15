// Same Syntax of Java :

let password = true

if (password) {
    console.log("You are Logged in")
}
else {
    console.log("Incorrect")
}
console.log("Bye")



//  JavaScript Syntax :
// This syntax will have any Curly Brackets :


if(password)
console.log("You are Logged in")
else
console.log("Incorrect")


// Comparison Operator : == === != !== > < >= <= ?:
//  Logical Operators   && || !


let age = 65
let gender = 'female'

if (age>60 && gender=='male') {
    console.log("You are Avail for the discount")
}
else {
    console.log("Invalid")
}



//  Max of two Number :

let a = 20
let b = 30
let Max

if (a>b) {
    Max = a
}
else {
    Max = b
}
console.log(Max)



// Example Problem FD Calculator :
//  FD Rates :
//  <3 Months - 5.8%
//  3-6 Months - 6.5%
//  7-9 Months - 6.8%
//  >=10 Months - 7%

function fdrate() {
    let months = Number(document.getElementById("input").value)

    let rate = 0

    if (months < 3) {
        rate = 5.8
    }
    else if (months>=3 && months<=6) {
        rate = 6.5
    }
    else if (months>=7 && months<=9) {
        rate = 6.8
    }
    else {
        rate = 7
    }

    document.getElementById("result").value = `Your Interest rate ${rate} %`
}