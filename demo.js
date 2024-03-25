function call() {
    let a, b, c, tot, avg

    a = parseInt(document.getElementById("t1").value)

    b = parseInt(document.querySelector(".t2").value)

    c = parseInt(document.querySelector(".t3").value)

    tot = a + b * c

    avg = tot / 3 * 12 - 100

    document.getElementById("result_1").value = `${avg} Values`
}




function show() {
    let ce = Number(document.querySelector(".input-field-1").value)

    let formula_1 = ce / 2.54

    document.getElementById("result_2").value = `${formula_1.toFixed(2)} Inches`
}



function press() {
    let name = document.querySelector(".input-field-2").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let result = name[formula_2]

    document.getElementById("result_3").value = `${result} Wds`
}

function twlc() {
    let len = document.querySelector(".input-field-3").value

    let formula_3 = len.length

    document.getElementById("result_4").value = `${formula_3} Characters`
}

function fdrate() {
    let months = Number(document.querySelector(".input-field-4").value)

    let rate = 0

    if (months < 3) {
        rate = 6.5
    }

    else if (months >=3 && months <=6) {
        rate = 7.0
    }

    else if (months >=7 && months <=9) {
        rate = 8.0
    }

    else if (months >=10) {
        rate = 10
    }

    document.getElementById("result_5").innerHTML += "<marquee> Answer :" + rate + " " + "%" + "</marquee>"
}