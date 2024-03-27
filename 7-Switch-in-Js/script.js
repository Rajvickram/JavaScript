//  Switch Example program while without using Button => OnClick() method 

let btn = document.querySelector('button')

let result = btn.querySelector

btn.addEventListener('click',display) 

function display() {
    let inp = document.getElementById('input-range')

    let city = inp.options[inp.selectedIndex].value

    switch (city) {
        case 'Chidambaram' :
            pop = 120
            Lira = 10.20
            La = 'Tamil'
            break

        case 'Chennai' :
            pop = 250
            Lira = 17.20
            La = 'English'
            break

        case 'Bangalore' :
            pop = 745
            Lira = 41.20
            La = 'Kannada'
            break

        case 'Delhi' :
            pop = 785
            Lira = 85.10
            La = 'Hindi'
            break
    }

    let text = `The Indian City ${city} has Population is ${pop} and rate ${Lira} is ${La}`

    document.getElementById('result').innerHTML = text
}