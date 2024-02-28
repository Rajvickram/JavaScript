function add() {
    var a,b,c,d,tot,avg;
    a = parseInt(document.getElementById("t1").value);
    b = parseInt(document.getElementById("t2").value);
    c = parseInt(document.getElementById("t3").value);
    d = parseInt(document.getElementById("t4").value);
    tot = a + b * c - d;
    avg = tot / 4;

    document.getElementById("p1").innerHTML+= "<marquee> Answer : " + avg + "</marquee>";
}


// let name = prompt("Enter Your name:")

// console.log("hi", name)

// let ticket = prompt("how many tickets do you want :")
// console.log("You should pay : ", Number(ticket)*20)


let a = prompt("Enter a Number")
console.log(Number(a)+10)