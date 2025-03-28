// for(i=0;i<100;i++){
    
//     if(i%3==0){
//         console.log("Fizz")
//     } else 
//     if(i%5==0){
//         console.log("Buzz")
//     }else
//     if(!(i%3==0)&&!(i%5==0))
//     console.log(i)
// }


for(let n=1;n<=100;n++){
    value="";
    if(n%3==0) value+="Fizz";
    if(n%5==0) value+="Bizz";
    console.log(value||n);
}