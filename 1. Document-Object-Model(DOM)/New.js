function check() {
    let cm = Number(document.getElementById("input").value)

    let inch = cm / 2.54

    let result = document.getElementById("res")  

    result.innerHTML = inch.toFixed(2) + " " + "Inches"
}