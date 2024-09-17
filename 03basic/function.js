//IN this folder we learn about function and its uses.

const { log } = require("console")
const { findSourceMap } = require("module")



function f1() {
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("E")
    console.log("K")

}

f1();

function f2(Number1, Number2) {
    console.log(Number1 + Number2)
}

f2(12, 13);

function f3(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        console.log("Please Enter Number");

    } else if (num1 === null || num2 === null) {
        console.log("Please enter valid number");
    } else {
        console.log("num1 and num2 Value is", num1 + num2);

    }


}
const res = f3(3, 9);
console.log(res); // result is undefine show


function f4(n1, n2) {
    let s = n1 + n2
    return s
}

//in this function we have the a varibale name s 

const result = f4(4, 5)
console.log("result", result);

//its output syntax we have ohter variable name result is both variable is same or what and why. find the answer.


function loginUser(username) {

    return `${username} just logged in`
}

const r1 = loginUser("Abhishek")
console.log(r1);


//in this we pass the value and its show
//if we leave the argument "" it show empty space
//if we leave the argument empty it show the undefind value


//In this we can also set the value of undefind 
function f5(user) {
    if (!user) {
        console.log("Please enter username")
        return;
    }
    return `${user} is logged in the system`
}

let r3 = f5("Abhishek")
console.log(r3);


//we can also set same defult value in the variable argument for the user if user is input the value it would be override by the value.

function f6(u = "admin") {
    return `${u} is login is the system`
}

let r4 = f6()
console.log(r4);