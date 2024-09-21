// for loop iteratioon in loop code

//structur
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

let a;
for (a = 1; a <= 10; a++) {
    let b = a;

    if (b == 5) {
        // console.log(`this is the middle number ${b}`);

    }
    //console.log(b);
}

//nested loop for it test value

for (let a = 0; a < 10; a++) {
    // console.log("*");

    for (let b = 0; b < a; b++) {

        //     console.log("*");

    }
}


//Loop on the array

let myArray = ["Abhishek", "Rahul", "Sonu", "Nadim", "Kunal"]
    //console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);


}

// for limit set on loop

//break and continue

//on the break code.
for (let a = 1; a <= 20; a++) {
    if (a == 5) {
        //   console.log(`Dected ${a}`);
        break;

    }
    //  console.log("value of the a", a);


}

//on the continus code
for (let a = 1; a <= 20; a++) {
    if (a == 5) {
        console.log(`Dected ${a}`);
        continue;
    }
    console.log(a);

}