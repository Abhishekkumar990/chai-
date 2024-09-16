const { log } = require("console")

//Date
let myDate = new Date()
    // console.log(myDate.toString()) //Mon Sep 16 2024 19:17:33 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()) //Mon Sep 16 2024
// console.log(myDate.toISOString()) //2024-09-16T13:47:33.397Z
// console.log(myDate.toJSON()) //2024-09-16T13:47:33.397Z
// console.log(myDate.toLocaleDateString()) //16/9/2024
// console.log(myDate.toLocaleString()) //16/9/2024, 7:17:33 pm


let myCreateDate = new Date(1996, 6, 21)
console.log(myCreateDate.toDateString());