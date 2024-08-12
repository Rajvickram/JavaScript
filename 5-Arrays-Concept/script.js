Splice Method :- Delete, insert and Replace; 


let cities = ["chidambaram", "cuddalore", "Chennai"]
console.log(cities)



//  Length - Total Element in an array :
console.log(cities.length)

let marks = [78, 56, 67, 54, 98]
console.log(cities[0])



//  Last index in this element without using index-value function :

let result = marks[marks.length-3]
console.log(result)


// Mix of int and String

let arr = [1, 2, 3, 4, "a", "abc", [17,5]]
console.log(arr)
console.log(arr[6][1])


// 2D Array 

let matrix = [[1,2,3], [3,4,5], [6,7,8]]
console.log(matrix)
console.log(matrix[0][2])
console.log(matrix[2][1])



// Arrays Method :



//  1St Method using Push :
// Adding Last Element in an Array :


let array = ["a", "b", "c", "d", "e"]
array.push("f")
console.log(array)


// 2ND Method using pop :
// Removing Last Element in an array :

array.pop()
console.log(array)



//  3RD Method using Shift :
//  Removing First Element in an array :

array.shift()
console.log(array)



//  4Th Method using UnShift :
//  Adding First Element in an array :

array.unshift("A")
console.log(array)



//  5TH Method using Delete :
//  But while using this Delete Option will not ne used in any Other Function :

// delete array[2]
// console.log(array)



//  6TH Method using Splice :
//  Splice method used for (Delete, Insert and Replace) :


//  First Deleting using Splice Method :
array.splice(2,1)
array.splice(2,2)
console.log(array)




// Second replace using Splice Method :
array.splice(1,1,"Raj")
console.log(array)
array.splice(1,2,"x","y")
console.log(array)


//  I want to insert a new Element without deleting any element :
array.splice(1,0,"Rajvickram")
console.log(array) 



//  Slice Method using Array :

let arrays = ["a", "b", "c", "d", "e", "f"]
console.log(arrays.slice(1))



//  Array -- Reverse Methods :

arrays.reverse()
console.log(arrays)



//  Join Method using Array :

let str = arrays.join()
console.log(str)


// Split Method using Array :
//  This Method using String to an Array : 


let str1 = "a,b,c,d,e,f"
let arr1 = str1.split(" ")
console.log(arr1)



//  Concat Array Method :
//  Spread Operator :

let firstArr = [1, 2, 3]
let secondArr = [3, 4, 5]

//  1ST Method using Joining :

let join = [firstArr, secondArr]
console.log(join)

// 2ND Method using Joining : 

let joined = firstArr.concat(secondArr)
console.log(joined)


// 3RD Method using Joining : 


let joinArr = [...firstArr,...secondArr]
console.log(joinArr)



//  Excercise Problem :
let arrayvalue = [5, 8, 10, 7, 9, 11]


// Finding Length : 
console.log(arrayvalue.length)


// Replace 7,9,11 with 17,19,111 :

arrayvalue.splice(3,3,17,19,111)
console.log(arrayvalue)


// Insert Begining  of the array: 

arrayvalue.unshift(100)
console.log(arrayvalue)


// Insert Last Position  of the Array : 

arrayvalue.push(200)
console.log(arrayvalue)
