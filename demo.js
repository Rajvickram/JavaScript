function call() {
    let a,b,c,tot,avg
    a = parseInt(document.getElementById("t1").value)

    b = parseInt(document.getElementById("t2").value)

    c = parseInt(document.getElementById("t3").value)

    tot = a * b * c

    avg = tot / 3 * 100

    document.querySelector(".ans").value = `${avg.toFixed(2)} values`
}


// Converting Centimeter to Length :


function show() {
    let ce = Number(document.querySelector(".input").value)

    let formula_1 = ce / 2.54

    document.querySelector(".result_1").value = `${formula_1.toFixed(2)} values`
}


// Random Letters Printing our name while Enter in Input box :


function press() {
    let name = document.querySelector(".input-field").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let result = name[formula_2]

    document.getElementById("result_2").value = `${result}`
}


// Checking Total Length :


function wordlength() {
    let names = document.getElementById("name").value

    let formula_3 = names.length

    document.querySelector(".result_3").value = `${formula_3} Length`
}