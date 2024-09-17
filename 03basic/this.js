//in this code we learn about the (THIS) and (ARROW) of function.

const user = {
    username: "abhishek",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} Welcome to websites`);
        console.log(this);


    }
}

// user.welcomeMessage() //ouput is the abhishek welcome to websites. 

// //Now here the context it mean the value of the username has change.
// user.username = "sam"
// user.welcomeMessage() //output is the sam welcome to websites.


//console.log(this);


function f1() {
    let username = ""
    console.log(this);

}

//f1()

//Arrow functions
const chai = () => {
        let username = ""
        console.log(this);

    }
    //this is the type for defing the arrow function.
const addTwo = (num1, num2) => {
    return num1 + num2
}

let r = addTwo(1, 2)
    //console.log(r);

//there is another type of defineing the arrow function called implicet function

const add = (num1, num2) => num1 + num2
    //console.log(add(1, 2));

const Two = (num1, num2) => (num1 + num2)
    //console.log(Two(2, 4));


//object
const handleObject = (name) => ({ username: "Abhishek" })
console.log(handleObject("username"));