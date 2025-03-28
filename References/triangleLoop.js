// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }


// for (let line = "*"; line.length < 8; line += "*")
//     console.log(line);



let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
  let row = "";
  
  // Add leading spaces for centering the stars
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  // Add stars
  for (let k = 1; k <= (2 * i - 1); k++) {
    row += "*";
  }

  console.log(row);
}
