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