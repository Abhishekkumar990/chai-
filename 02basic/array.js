// Array codes

const { log } = require("console");


//In this we define this using this 
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, "Abhishek"]
const myUser = ["Rahul", "Shonahan", "kunal"]
const newarr = new Array(1, 1, 1, 1, 1);
//And using this we also define this to show the output
// console.log(myArray);

// console.log(myArray[0]);


//Array Method to see

myArray.push(6)
myArray.pop("Abhishek")
    // console.log(myArray)
myArray.unshift(10) //to add in zero index use this
myArray.shift() //to remove from zero index use this code 

// console.log(myArray.includes("Abhishek")); //To find the element
// console.log(myArray.indexOf("Abhishek")); // To find the element index number

const newArra = newarr.join() // To change the type and array
    // console.log(newArra)
    // console.log(typeof newArra)


//slice and splice

console.log("a", newArra);
const mya1 = newarr.slice(1, 3)
console.log(mya1);


const a1 = newarr.splice(1, 3)
console.log(a1);



let myAllArray = [myArray, myUser, newarr]
    //console.log(myAllArray)