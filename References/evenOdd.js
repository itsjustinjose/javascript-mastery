function evenOdd(x){
    if(x==0) return true;
    else if(x==1) return false;
    else if(x<0) return evenOdd(-x);
    else return evenOdd(x-2)
}

console.log(evenOdd(0));
console.log(evenOdd(1));
console.log(evenOdd(-1));
console.log(evenOdd(10));

