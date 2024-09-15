let score = "33"


// there is two ways to know about the output type.

// *first is this
console.log(typeof(score));


//second is this type.
console.log(typeof score)
    //convert the string into Number.
let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)



//When we convert the string into number into it somtime it convetr it into NaN so check the output.

//If we convert thr value of booken number so it show the out into 0 and 1 show the result .

//Now the result of the this case is that the case should be simler then expeted

let isLogedIn = 0

let isLogedoutput = Boolean(isLogedIn)

console.log(typeof isLogedoutput)
console.log(isLogedoutput)

//if we convert the of ohter then 0, bigint zero, undfine, "", other then 1, 10, 100, -1 -100 are true