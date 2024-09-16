//next array class

const a1 = [5, 3, 35, 53, 32, 4, 42, 2, ]
const b1 = ["name", 2, 3, 4, 2, 3, 3]
    //console.log(a1.sort()) //to short the number.

//a1.push(b1) //To push one array value into another we user First_Array.push(Second_ArrayName)

// console.log(a1) //To access array nested value we use
// console.log(a1[8][0])

//To push one array into another array we use CONCAT function

const c1 = a1.concat(b1);
//console.log(c1); //IN this we use the function CONCAT to merage the aone array into ohter value


//sprade oprater
const c2 = [...a1, ...b1]
    //console.log(c2);

const a2 = [1, 2, 3, 4, [4, 5, 6],
    [2, 4, 2, [3, 4, 5]]
]
let c3 = a2.flat(Infinity)
    // console.log(c3.sort());


// console.log(Array.from({ name: "Abhishek" }));

let l1 = "12"
let l2 = "15"
let l5 = "45"

// console.log(Array.of(l1, l2, l5));

let o1 = Array.of(l1, l2, l5)

console.log(Array.from(o1));