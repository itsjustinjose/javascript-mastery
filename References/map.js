// Map


const numbers = [1,2,3,4,5];

// console.log(numbers.map(function(num){
//     return num*2;
// }))

const doubles = numbers.map(function(num){
    return num*2;
})

console.log(numbers)
console.log(doubles)

const evenOdd = numbers.map(function(num){
    return {
        number: num,
        IsEven: (num%2===0)
    }
})

console.log(evenOdd)


const names =['justin', 'joyel', 'bibin', 'ligin']

let newVersion = names.map(function(name){
    return name.toUpperCase().split('').join('.');
})

console.log(newVersion)