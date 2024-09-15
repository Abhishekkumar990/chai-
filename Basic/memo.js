//IN this code we learn about the memory and all things all code

//stack is the primitive and 


let myFunction = function() {
    let str4 = {
        name: "Abhishek",
        age: 23,
        number: 12345678
    };
    let str5 = {
        name: "",
        age: 0,
        number: 0,
    };
    return [str4, str5]
}

console.table(myFunction())