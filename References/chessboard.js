// for (let i = 1; i <= 8; i++) {
//     let value = ""; // Reset the row string at the start of each row

//     for (let j = 0; j < 8; j++) {
//         if ((i + j) % 2 === 0) {
//             value += "*";
//         } else {
//             value += " ";
//         }
//     }
//     console.log(value);
// }


// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);



let value = "";
for(let i=1;i<=8;i++){ 
    for(let j=1;j<=8;j++){
        if((i+j)%2==0) {
            value+=" ";
        } else{
                value+='*';
            }
    }
    value+='\n'
}
console.log(value)