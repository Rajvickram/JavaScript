function call() {
    var a,b,c,tot,avg
    a = document.getElementById("t1").value
    b = document.getElementById("t2").value
    c = document.getElementById("t3").value
    tot = a * b / c
    avg = tot *3/100

    document.getElementById("t4").value = avg.toFixed(2) + " " + "Values"
}

var a,b,c,total,average
a = parseInt(prompt("Enter No 1 :"))
b = parseInt(prompt("Enter No 2 :"))
c = parseInt(prompt("Enter No 3 :"))
total = a * b / c
average = total * 12/100

alert("Answer : " + average)

console.log("Answer : " + average)