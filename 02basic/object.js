//Object 



//How to declear the Object
//Singleton Object
Object.create



const mySym = Symbol("key1");
//Object literals

const a1 = {
    Name: "Abhishek",
    [mySym]: "myjey2",
    age: 15,
    Number: 10,
    color: "Blue",
    isLogedIN: false,
    lastLogIn: ["monday", "days"]
}
console.log(a1[mySym])
console.log(a1.color); //To user different type

a1.geeting = function() {
    console.log('Hello user')
}
a1.geeting1 = function() {
    console.log(`hello ${this.Name}`)
}


console.log(a1.geeting1())