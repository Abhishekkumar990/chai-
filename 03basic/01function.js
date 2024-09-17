//IN this code sreis we have a function which argument number we don't know 

function calculate(num1) {
    return num1;
}
console.log(calculate(3));



//using sprade oprater or rest oprater
function cal(...num1) {
    return num1
}
console.log(cal(100, 200, 300, 400))

//uses of object in the function

const user = {
    username: "users",
    price: 200
}

function handleObject(anyobject) {
    console.log(`username ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
    //we can also pass the value of object in dircet form

handleObject({
    username: "sam",
    price: 133
})


//Handle the Array in the function.

const myArray = [200, 100, 300]

function handleArray(getArray) {
    return getArray[1]
}

console.log(handleArray(myArray))

//we can also pass the array in the second form in this code.
console.log(handleArray([200, 2000, 223, 323]))