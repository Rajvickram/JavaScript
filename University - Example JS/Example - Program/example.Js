function call() {
    var a,b,c,tot,avg;
    a = parseInt(document.getElementById("t1").value);
    b = parseInt(document.getElementById("t2").value);
    c = parseInt(document.getElementById("t3").value);

    tot = a + b * c;

    avg = tot / 3;

    document.getElementById("p1").innerHTML+= "<marquee> Answer : " + avg + "</marquee>";
}