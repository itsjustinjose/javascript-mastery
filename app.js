// Arrow Functions

let square1 = function(x){
    return x*x;
}

let square = (x) => {
    return x*x;
}

let square2 = x => {
    return x*x;
}

let square3 = x =>(
    x*4
);
let square4 = x => x*4 ;





console.log(square1(10));

console.log(square(2));

console.log(square2(15));
console.log(square3(20));
console.log(square4(25));



let sing = () =>{
    console.log("LALALALALA")
}

sing();



//Implicit return
const nums = []