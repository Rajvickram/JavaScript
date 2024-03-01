// function call() {
//     var a,b,c,tot,avg
//     a = parseInt(document.getElementById("t1").value)
//     b = parseInt(document.getElementById("t2").value)
//     c = parseInt(document.getElementById("t3").value)
//     tot = a + b + c
//     avg = tot / 3

//     document.getElementById("t4").value = avg
// }


// // var a,b,c,d,tot,average
// // a = parseInt(prompt("No 1 :"))
// // b = parseInt(prompt("No 2: "))
// // c = parseInt(prompt("No 3: "))
// // d = parseInt(prompt("No 4: "))
// // tot = a + b + c * d
// // average = tot /12


// alert("Answer :" + average)
// console.log("Answer for Average Value : " + average)




// function press() {
//     let len = document.getElementById("field").value

//     let cm = len / 2.54

//     let res = document.getElementById("result")
//     res.innerHTML = cm.toFixed(2)+" " + "Inches"
// }



function set() {
    let name = document.getElementById("given").value

    let random = Math.floor(Math.random() * name.length)

    let ans = document.getElementById("rest")

    ans.innerHTML = name[random]

    console.log("Answer Random Name : " + ans)
}