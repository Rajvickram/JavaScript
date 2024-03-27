function call() {
    let a,b,c,tot,avg

    a = parseInt(document.querySelector(".t1").value)

    b = parseInt(document.querySelector(".t2").value)

    c = parseInt(document.querySelector(".t3").value)

    tot = a + b + c

    avg = tot / 3 * 12 

    document.getElementById("result_1").value = `${avg} values` 
}

function press() {
    let ce = Number(document.querySelector(".input_1").value)

    let formula_1 = ce / 2.54

    document.getElementById("result_2").value = `${formula_1.toFixed(2)} Inches`
}

function show() {
    let name = document.querySelector(".input_2").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let result = name[formula_2]

    document.getElementById("result_3").value = `${result}`
}

function fdRateCalc() {
    let months = Number(document.querySelector(".input_3").value)

    let rate = 0

    if (months <= 3) {
        rate = 7
    }

    else if (months >= 3 && months <= 6) {
        rate = 8
    }

    else if (months >= 7 && months <= 9) {
        rate = 9
    }

    else if (months >= 10) {
        rate = 10
    }

    document.getElementById("result_4").value = `${rate} %`
}