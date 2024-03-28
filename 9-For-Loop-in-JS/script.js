// //  In JavaScript in the same of an JAVA :

// //  so we have a 3 - types of an Loop :
// //  (For loop, While Loop, Do-While Loop) :

// for (let i=1;i<=5;i++) {
//     console.log('hello')
// }


// //  Printing Reversed Order in (10 TO 1) :

// for (let i=10;i>=1;i--) {
//     console.log(i)
// }


// //  While Loop :
// //  Same way of Reversed Order in (10 To 1) :


// i = 10
// while (i>=1) {
//     console.log(i)
//     i--;
// }


// //  Break Statement :

// //  If the user a Enter a number means u can the stop the Prompt element or else If user enter a Name means the loop will not be ended and the Prompt also can never be closed :


// while (true) {
//     let num = Number(prompt('Enter a Number :'))

//     if (!isNaN(num)) {
//         break;
//     }
// }



// Pratice Program 
//  1. => Reversed Number While Using For Loop :


for (let i=10;i>=1;i--) {
    console.log(i)
}


//  2 => Same Program  using While Loop :

let i = 10

while(i>=1) {
    console.log(i)
    i--
}

//  3 => Get Value from Prompt the user will be Enter a Number only or else he will press any alphabet means won't get out that attribute :

while(true) {
    let num = Number(prompt('Enter a Number :'))

    if (!isNaN(num)) {
        break
    }
}