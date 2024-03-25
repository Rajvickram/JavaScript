let btn = document.querySelector('button')

let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.querySelector(".container").appendChild(resultdiv)



btn.addEventListener('click', display)

function display() {
    let inp = document.getElementById("input-range")

    let city = inp.options[inp.selectedIndex].value

    let Population = 0, LiteracyRate = 0, Language = ''

    switch (city) {
        case 'Chidambaram' :
            Population = 985623
            LiteracyRate = 85.10
            Language = 'Tamil'
            break

        case 'Chennai' :
            Population = 78546
            LiteracyRate = 95.10
            Language = 'English' 
            break

        case 'Bangalore' :
            Population = 215463 
            LiteracyRate = 95
            Language = 'Kannada'
            break

        case 'Mumbai' :
            Population = 874523
            LiteracyRate = 96.10
            Language = 'Hindi'
            break

        case 'Delhi' :
            Population = 1236547 
            LiteracyRate = 97.10
            Language = 'Marathi'
            break
    }

    let text = `The Indian City is ${city} and the population is ${Population} the have Rate ${LiteracyRate} and the spoken lang is ${Language}`

    document.getElementById('result').innerHTML = text
}