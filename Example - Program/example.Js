function show() {
    var a,b,c,total,tax;
    a = document.getElementById("pname").value;
    b = parseInt(document.getElementById("Q").value);
    c = parseInt(document.getElementById("pr").value);
    total = b * c;
    tax = total * 12/100;

    document.getElementById("d1").innerHTML+=a+ "<br>";
    document.getElementById("d2").innerHTML+=b+ "<br>";
    document.getElementById("d3").innerHTML+=c+ "<br>";
    document.getElementById("d4").innerHTML+=total+ "<br>";
}