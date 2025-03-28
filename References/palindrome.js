function palin(n){
    let copy=0; pal=n
    do{
        copy= copy*10 + n%10;
        n=Math.floor(n/10);
    }while(n>0)

    return (copy === pal)

}

console.log(palin(23432))