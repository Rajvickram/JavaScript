function call() {
    let a,b,c,tot,avg
    a = parseInt(document.querySelector(".t1").value)
    b = parseInt(document.querySelector(".t2").value)
    c = parseInt(document.querySelector(".t3").value)

    tot = a * b + c
    avg = tot / 12 * 100 - 3

    document.getElementById("result_1").value = `${avg.toFixed(2)} values`
}


function press() {
    let cm = Number(document.querySelector(".t4").value)

    let formula_1 = cm / 2.54

    document.getElementById("result_2").value = `${formula_1.toFixed(2)} Inches`
}



function show() {
    let name = document.querySelector(".t5").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let result = name[formula_2]

    document.getElementById("result_3").value = `${result} Words`
}