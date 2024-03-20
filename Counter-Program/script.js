let dec = document.getElementById("decreaseBtn")

let res = document.getElementById("resetBtn")

let inc = document.getElementById("increaseBtn")

let counts = document.getElementById("countlabel")

let count = 0

inc.onclick = function() {
    count++
    counts.textContent = count
}

dec.onclick = function() {
    count--
    counts.textContent = count
}

res.onclick = function() {
    count = 0
    counts.textContent = count
}