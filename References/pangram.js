// function pangram(sentence){
//     let lwrcase = sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(lwrcase.indexOf(char) ===-1){
//             return false;
//         }  
//     }
//     return true;
// }
// console.log(pangram('The five boxing wizards jump quickly'));


function pangram(sentence){
    let lwrcase = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lwrcase.includes(char)){
            return false;
        }  
    }
    return true;
}
console.log(pangram('The five boxing wizards jump quickly'));