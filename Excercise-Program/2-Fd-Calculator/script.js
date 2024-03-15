// FD Rate Calculator :

//  3< Months - 5.8%
//  3-6 Months - 6.5%
//  7-9 Months - 6.8%
//  >=10 Months - 7%


function fdrate() {
    let months = Number(document.querySelector(".input").value)

    let rate = 0

    if (months < 3) {
        rate = 5.8
    }
    else if (months>=3 && months<=6) {
        rate = 6.5
    }
    else if (months>=7 && months<=9) {
        rate = 6.8
    }
    else {
        rate = 7
    }

    document.getElementById("result").value = `Your Interest rate is ${rate} %`
}