function call() {
    var a,b,c,tot,avg
    a = parseInt(document.getElementById("t1").value);
    b = parseInt(document.getElementById("t2").value);
    c = parseInt(document.getElementById("t3").value);
    tot = a + b + c;
    avg = tot / 3;

    document.getElementById("t4").value = avg;
}

var a,b,c,d,tot,avg
a = parseInt(prompt("Enter a Number 1 :"))
b = parseInt(prompt("Enter b Number 2 :"))
c = parseInt(prompt("Enter c Number 3 :"))
d = parseInt(prompt("Enter d Number 4 :"))
tot = a + b * c + d;
avg = tot / 4
alert("Answer :" + avg)

console.log("Answer :" + avg + "Average Value")