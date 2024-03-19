function call() {
    let a,b,c,tot,avg
    a = parseInt(document.getElementById("t1").value)

    b = parseInt(document.getElementById("t2").value)

    c = parseInt(document.querySelector(".t3").value)

    tot = a + b + c
    
    avg = tot / 12 * 100 - 3

    document.querySelector(".result").value = `${avg.toFixed(2)} values`
}



function show() {
    let ce = Number(document.querySelector(".input-field-1").value)

    let formula_1 = ce / 2.54

    document.getElementById("result_1").value = `${formula_1.toFixed(2)} Inches`
}




function press() {
    let name = document.querySelector(".input-field-2").value

    let formula_2 = Math.floor(Math.random() * name.length)

    let rest = name[formula_2]

    document.getElementById("result_2").value = `${rest} words`
}











function take() {
    let names = document.getElementById("input-field-3").value

    let formula_3 = names.length

    document.getElementById("para").innerHTML+= "<marquee>" + formula_3 + "</marquee>"
}