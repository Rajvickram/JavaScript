let btn  = document.querySelector('button')

let answer = document.createElement('div')
answer.id = 'result'
document.querySelector('.container').appendChild(answer)

btn.addEventListener('click',display)

function display() {
    let inp = document.getElementById("input-range")

    let city = inp.options[inp.selectedIndex].value

    switch (city) {
        case 'Chidambaram' :
            Pop = 123456
            Lira = 85.1
            La = 'Tamil'
            break

        case 'Chennai' :
            Pop = 987456
            Lira = 95.1
            La = 'English'
            break

        case 'Bangalore' :
            Pop = 74563
            Lira = 86.1
            La = 'Kannada'
            break

        case 'Mumbai' :
            Pop = 896532
            Lira = 87.1
            La = 'Hindi'
            break

        case 'Delhi' :
            Pop = 89653
            Lira = 88.1
            La = 'Marathi'
            break
    }

    let text = `The Indian City ${city} has Population Level is ${Pop} they have Rate is ${Lira}  and Language is ${La}`

    document.getElementById("result").innerHTML = text
}