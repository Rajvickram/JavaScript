//  IF Else Condition :

let password = true

if (password) {
    console.log("You are valid to enter a Password")
}
else {
    console.log("Incorrect Passowrd")
}



//  age Checking Tasks :


let age = 20

if (age > 19) {
    console.log("You are valid to enter a Vote")
}
else {
    console.log("You are not valid to enter a Vote")
}



// Max Two Number Printing in the Variable :

let a = 20;
var b = 30;
var max 

if (a > b) {
    max = a
}
else {
    max = b
}

console.log(`Value ${max}`)


//  FD Rate Calculator :
//  FD Rates
//  <3 months - 5.8%
//  3-6 months - 6.5%
//  7-9 months - 6.8%
//  >=10 months - 7%

function fdrate() {
    let months = Number(document.getElementById("input").value)

    let rate = 0

    if (months < 3) {
        rate = 5.8
    }

    else if (months >= 3 && months <= 6) {
        rate = 6.5
    }

    else if (months >=7 && months <= 9) {
        rate = 6.8
    }

    else if (months >= 10) {
        rate = 7
    }

    document.getElementById("result").value = `${rate} % values`


}