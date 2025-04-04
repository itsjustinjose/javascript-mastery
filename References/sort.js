//sort

const prices =[7,10,23,449,857,774,999,7342];

const stringSort = prices.sort();
console.log(stringSort);

const ascSort = prices.sort((a,b)=> a-b);
// console.log(ascSort);

const descSort = prices.sort((a,b)=> b-a);
console.log(ascSort);
console.log(descSort);
console.log(ascSort);
//use slice to create a new copy of the array