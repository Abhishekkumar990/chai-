const userEmail = []


if (userEmail) {

    console.log("got it email");
} else {

    console.log("Don't have user email");
}

//in this case if we put the value in the userEmail in this array is there it count the value is prsent and if the value is not there then it count not able how can i know when it vlaue it prsent ot not


//falsy values
//false, 0, -0, 0n, "", null, undefind, NaN


//Truthy value
//true,"0", "false", " ", array[], object{}, function(){}


//Check the array the empty

if (userEmail.length === 0) {
    console.log("empty");
}

const emObj = {}

if (Object.keys(emObj).length === 0) {
    console.log("Object is empty");

}

//Nullish Coalescing Operator (??): null undefind

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 5;
// val1= undefind ?? 14;

//val1 = null ? ? 10 ? ? 20;

//console.log(val1);



// terniary operator

//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("More then 80");