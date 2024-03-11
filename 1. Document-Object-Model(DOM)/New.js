function check() {
    let name = document.getElementById("input").value

    let formula = Math.floor(Math.random() * name.length)

    let result = name[formula]

    let show = document.getElementById("res")

    show.innerHTML = result
}