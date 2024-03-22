let btn = document.querySelector("button")
let resultdiv = document.createElement("div")
resultdiv.id = 'result'
document.querySelector(".container").appendChild(resultdiv)



btn.addEventListener('click', call)
function call() {
    let inp = document.getElementById("input-range")
    let city = inp.options[inp.selectedIndex].value

    let Population = 0, LiteracyRate = 0, Language = ''

    switch (city) {
        case 'Chidambaram' :
            Population = 123456
            LiteracyRate = 95.12
            Language = 'Tamil'
            break

        case 'Chennai' :
            Population = 12365478
            LiteracyRate = 98.12
            Language = 'English'
            break

        case 'Bangalore' :
            Population = 2563214
            LiteracyRate = 96.12
            Language = 'Kannada'
            break

        case 'Mumbai' :
            Population = 6541258
            LiteracyRate = 97.12
            Language = 'Hindi'
            break

        case 'Delhi' :
            Population = 985632
            LiteracyRate = 97.85
            Language = 'Marathi'
            break
    }

    let answer = `The Indian City of ${city} is most population level is ${Population} there are total Literacy Rate ${LiteracyRate} and they speak ${Language}`

    document.getElementById("result").innerHTML = answer
}