let btn = document.querySelector('button')

let answer = document.createElement('div')
answer.id = 'result'
document.querySelector('.container').appendChild(answer)

btn.addEventListener('click',disp)

function disp() {
    let inp = document.getElementById('input-range')

    let city = inp.options[inp.selectedIndex].value

    switch(city) {
        case 'Chidambaram' :
            Pop = 12345
            Li = 90.10
            La = 'Tamil'
            break

        case 'Chennai' :
            Pop = 123456
            Li = 91.12
            la = 'English'
            break
        
        case 'Bangalore' :
            Pop = 1234567
            Li = 92.12
            La = 'Kannada'
            break

        case 'Mumbai' :
            Pop = 12345678
            Li = 93.12
            La = 'Hindi'
            break

        case 'Delhi' :
            Pop = 123456789
            Li = 94.12
            La = 'Marathi'
            break
    }

    let text = `The Indian City have a ${city} and they are having more Population ${Pop} they have been a Rate is ${Li} the have been spoken Language is ${La}`

    document.getElementById('result').innerHTML = text
}