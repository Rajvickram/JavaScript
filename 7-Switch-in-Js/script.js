/* Chidambaram : 
           Population = 56,41,81,893
           Male LiteracyRate  = 95.57
           Female LiteracyRate = 88.41
           Total Literacy Rate = 91.99 
           language = "Tamil"

    Pondicherry : 
           Population = 3,42,41,04,864
           Male LiteracyRate  = 98.97
           Female LiteracyRate = 90.41
           Total LiteracyRate = 94.69
           language = "Tamil, English, France"

    Chennai : 
           Population = 4,53,52,15,975
           Male LiteracyRate  = 99.99 
           Female LiteracyRate = 91.52
           Total LiteracyRate = 95.70
           language = "English, Malayalam"


    Bengalore : 
           Population = 4,52,51,14,864
           Male LiteracyRate  = 99.00
           Female LiteracyRate = 90.40
           Total LiteracyRate = 94.20
           language = "Kannada"


           The Indian City Most Population had population of of which male and female were first Male is next Female and they language Spoken is 
*/


//  First Type of Program Without using Button (onclick() => Function) :


let btn = document.querySelector("button")
let resultdiv = document.createElement("div")
resultdiv.id = 'result'

document.querySelector(".container").appendChild(resultdiv)

btn.addEventListener('click', displayStats)

function displayStats() {
    let inp = document.getElementById("input-range")

    let city = inp.options[inp.selectedIndex].value

    console.log(city)

    let Population = 0, Male_LiteracyRate = 0, Female_LiteracyRate = 0, Total_LiteracyRate = 0, Language = ''

    switch (city) {
        case 'Chidambaram' :
            Population = 564181893
            Male_LiteracyRate = 95.57
            Female_LiteracyRate = 88.41
            Total_LiteracyRate = 91.99
            Language = 'Tamil'
            break

        case 'Pondicherry' :
           Population = 3424104864
           Male_LiteracyRate  = 98.97
           Female_LiteracyRate = 90.41
           Total_LiteracyRate = 94.69
           language = "Tamil, English, France"
            break


        case 'Chennai' :
            Population = 4535215975
           Male_LiteracyRate  = 99.99 
           Female_LiteracyRate = 91.52
           Total_LiteracyRate = 95.70
           Language = "English, Malayalam"
           break

        case 'Bengaluru' :
           Population = 4525114864
           Male_LiteracyRate  = 99.00
           Female_LiteracyRate = 90.40
           Total_LiteracyRate = 94.20
           Language = "Kannada" 
           break
    }


    let textvalue = `The Indian City Most Population ${city} had population of ${Population}of which ${Total_LiteracyRate} male and female were first Male is ${Male_LiteracyRate} next Female ${Female_LiteracyRate} and they language Spoken is ${Language}`

    document.getElementById("result").innerHTML = textvalue
}




//  Second Type of Program using Button Type while => Onclick() : 

//  Will shown in Next BS and JS Concept :

