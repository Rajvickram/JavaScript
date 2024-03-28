//  In JavaScript in the same of an JAVA :

//  so we have a 3 - types of an Loop :
//  (For loop, While Loop, Do-While Loop) :

for (let i=1;i<=5;i++) {
    console.log('hello')
}


//  Printing Reversed Order in (10 TO 1) :

for (let i=10;i>=1;i--) {
    console.log(i)
}


//  While Loop :
//  Same way of Reversed Order in (10 To 1) :


i = 10
while (i>=1) {
    console.log(i)
    i--;
}


//  Break Statement :

//  If the user a Enter a number means u can the stop the Prompt element or else If user enter a Name means the loop will not be ended and the Prompt also can never be closed :


while (true) {
    let num = Number(prompt('Enter a Number :'))

    if (!isNaN(num)) {
        break;
    }
}

//  Continue Statement in While Loop :

console.log('Continue Demo')

for (i=1;i<=10;i++) {
    if (i%3 == 0) {
        continue
        console.log(i)
    }
}


//  For Of Loop :

let arr = ['apple','Mango','Avacado','grape']

//  1St method :

for (let i=0;i<arr.length;i++) {
    console.log(arr[i].toUpperCase())
}


// For Of Loop 
//  2ND Method :

for (let fruit of arr)





// --------------------------------------------------------------------
//  For in :

item = {
    name : 'Phone',
    qua : 1,
    price : 25000
}

for (let key in item) {
    console.log(item[key])
}



// ---------------------------------------------------------------------



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

// while(true) {
//     let num = Number(prompt('Enter a Number :'))

//     if (!isNaN(num)) {
//         break
//     }
// }