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
const nums = [1,2,3,4,5,6];

const doubles1 = nums.map(function(n){
    return n*2
})

console.log(doubles1);

const doubles2 = nums.map(n =>{
    return n*2;
})

console.log(doubles2);


const doubles3 = nums.map(n => n*2)

console.log(doubles3);


//condionals
const parityList = nums.map(function(n){
    if(n%2 === 0) {
        return 'true';
    } else {
        return 'false';
    }
})
console.log(parityList)

const parityList1 = nums.map((n)=>{
    if(n%2 === 0) {
        return 'true';
    } else {
        return 'false';
    }
})
console.log(parityList1)

const parityList2 = nums.map((n)=>( n%2 === 0 ? 'true': 'false'))
const parityList3 = nums.map((n)=> n%2 === 0 ? 'true': 'false')
console.log(parityList2)
console.log(parityList3)
