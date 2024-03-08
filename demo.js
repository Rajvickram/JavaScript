function Call() {
    var a,b,c,tot
    a = parseInt(document.getElementById("t1").value)
    b = parseInt(document.getElementById("t2").value)
    c = parseInt(document.getElementById("t3").value)

    tot = a * b + c
    

    document.getElementById("t4").value = tot + " " + "Values"
}

var a,b,c,total,avg
a = parseInt(prompt("Enter No 1 :"))
b = parseInt(prompt("Enter No 2 :"))
c = parseInt(prompt("Enter No 3 :"))

total = a + b - c

avg = total / 3 * 100

alert("Answer :" + avg)

console.log("Answer :" + avg)