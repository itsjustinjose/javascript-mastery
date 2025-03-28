//1. sum of n natural number

// function sumofNaturalnumber(n) {
//     let sum=0
//     for(let i=1; i<=n; i++){
//         sum=sum+i;
//     }
//     return sum;
// }

function sumofNaturalnumber(n){
    return n*(n+1)/2;
}



console.log("Sum of n natual number = " + sumofNaturalnumber(5))
console.log("Sum of n natual number = " +sumofNaturalnumber(10))


//2. sum of digits of a number

function sumofDigits(n){
    let sum=0;
    while(n>0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    
    return sum;
}

console.log("Sum of Digits of a number = " + sumofDigits(1234))



//3. Number of digits of a number


function numberofDigits(n){
    n = Math.abs(n);
    let number = 0;
    do{
        number++;
        n = Math.floor(n/10);
    }while(n>0)
    return number
}

console.log("Digits of a number = " + numberofDigits(-120430))



