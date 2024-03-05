function set() {
    let cm = Number(document.getElementById("t1").value)

    let inch = cm / 2.54

    let res = document.getElementById("t2")

    res.innerHTML = inch.toFixed(2) + " " + "Inches"
}


function change() {
    let no = document.getElementById("field").value

    let form = Math.floor(Math.random() * no.length)
    
    let rest = no[form]

    let tel = document.getElementById("ans")

    tel.innerHTML = rest + " " + "Numbers"

    console.log("Random is : " + rest)
}