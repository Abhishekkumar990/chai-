// in this we talke about the scope of varibale.

let b = 200;

if (true) {
    let a = 20
    const b = 30
        //  console.log("inner", b);

    var c = 23
}



// console.log(a)
//console.log(b)
//console.log(c)

//nested scope 
function f1() {
    const name = "Abhishek"

    function subfunction() {
        const websites = "Yputube"
        console.log(name);

    }
    //console.log(websites);
    //if we access outside of this varibale value we can't use the vaibale outside its parameter.

    subfunction()
}
//f1()

if (true) {
    const uName = "Abhishek"
    if (uName === "Abhishek") {
        const websites = "youtube"
            // console.log(uName + websites);

    }
    //console.log(websites); //the name of varibale is websites inside in block 

}

//console.log(uName);
//it also has no scope outside of variable.


//+++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++
console.log(addOne(7))

function addOne(num) {
    return num + 1

}
//This function is being only declear by uesr in this we can us first and after the calling

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(2));

//This function is being delcear and also it is being store inside the a varibale in this we can only call the value after the delceasion