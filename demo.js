function call() {
    let a,b,c,tot,avg

    a = parseInt(document.getElementById("t1").value)

    b = parseInt(document.getElementById("t2").value)

    c = parseInt(document.querySelector(".t3").value)

    tot = a * b + c

    avg = tot / 3 * 12 * 100

    document.querySelector(".result").value = `${avg} values`
}



function press() {
    let ce = Number(document.querySelector(".inpt-field-1").value)

    let formula_1 = ce / 2.54

    document.querySelector(".result_1").value = `${formula_1.toFixed(2)} inches`
}



function show() {
    let name = document.querySelector(".input-field-2").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let rest = name[formula_2]

    document.querySelector(".result_2").value = `${rest} WORDS`
}



function fdrate() {
    let months = Number(document.querySelector(".input-field-3").value)

    let rate = 0

    if (months <= 3) {
        rate = 6.5
    }

    else if (months >= 3 && months <=6) {
        rate = 7.0
    }

    else if (months >= 7 && months <= 9) {
        rate = 7.5
    }
    else if (months >= 10) {
        rate = 8
    }


        document.querySelector(".result_3").value = `${rate} %`
    
}