//singleton
const tinder = new Object();
tinder.id = "123sd"
tinder.name = "Rohan"
tinder.isLogedIn = true

//console.log(tinder);


const object1 = {

    email: "",
    fullname: {
        userFullName: {
            first: "Abhishek",
            last: "Sharma"
        }
    }
}

//console.log(object1.fullname.userFullName);

const ob1 = { 1: "a", 2: "b" }
const ob2 = { 3: "d", 4: "f" }

//const object = { ob1, ob2 } output of this object is {ob1{}, ob2{}} show


//const ob3 = Object.assign({}, ob1, ob2)

const ob3 = {...ob1, ...ob2 }
    //console.log(ob3);


console.log(tinder);
console.log(Object.keys(tinder)) //using this method we get the value of the keys in object.
console.log(Object.values(tinder)) //using this method we get the value of the value of object

console.log(Object.entries(tinder)); // in this method we check the all key and value in the single array of thir paired part.

console.log(tinder.hasOwnProperty('isLogedIn')); //Using this Method we check the key of value is in the object or not.


// Non-singleton object
const tind = {}