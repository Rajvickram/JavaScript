function add() {
    var a,b,c,tot,avg;
    a=parseInt(document.getElementById("t1").value);
    b=parseInt(document.getElementById("t2").value);
    c=parseInt(document.getElementById("t3").value);
    tot = a + b + c;
    avg = tot / 3;
    document.getElementById("p1").innerHTML+= "<marquee> Average Answer is : " + avg + "</marquee>";
}

var a,b,c,tot,avg;
a = parseInt(prompt("Enter No 1 : "));
b = parseInt(prompt("Enter No 2 : "));
c = parseInt(prompt("Enter No 3 : "));
tot = a + b - c;
avg = tot / 3;
alert("Answer is : " + avg);