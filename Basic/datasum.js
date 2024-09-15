//javascript is dynamic language in code verse so that it didn't require the declear the tyype of data to clear

//Primitive type of 7

// 1)String
const str = "Abhishek"
    // 2) number
const a = 100
const b = 10.3
    //3) boolen
const isLogin = true
    //4) null
const value = null
    //5) undefinde
    // const val;
    //6) symbol
const user = Symbol('123')
const user1 = Symbol('123')
    //7) BigInt
    //const bigIntNumber = 1234565432434343343 n;

//reference(non-premitive)
//Array
const users = ['Abhishek', 'sujeet', 'laloo', 'lunal']
    //Objects

let myDetails = {
        name: "Abhishek",
        age: 23,
        sum: "code",
    }
    //Function

const myFunction = function() {
    console.log("hello world");
}

console.log(myDetails)
console.log(typeof(myFunction))



const testFunction = function(a, b) {

    return a * b;

}

console.log(typeof(testFunction(10, 20)))