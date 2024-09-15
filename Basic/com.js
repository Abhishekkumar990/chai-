// console.log(2 < 3)
// console.log(2 <= 3)
// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0) //false
console.log(null >= 0) //true
console.log(null == 0) //false

//The reason is that an equality check == and comparisons < > <= >= work differently
//Compasion convert null to a nuber, tratin it as 0 thats why number 11 code line is true and line number 12 is false.

console.log("" > 0) // false
console.log("" == 0) //true
console.log("" >= 0) //true

//in this case typecovesion is working and convert empty string into 0 that why.