function call() {
    var a,b,c,tot,avg
    a = document.getElementById("t1").value
    b = document.getElementById("t2").value
    c = document.getElementById("t3").value
    tot = a * b / c
    avg = tot *3/100

    document.getElementById("t4").value = avg.toFixed(2) + " " + "Values"
}