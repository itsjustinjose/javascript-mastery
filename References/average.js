// function average(nums) {
//   let sum = 0;
//   for (item of nums) {
//     sum = sum + item;
//   }

//   let avg = sum / nums.length;
//   return avg;
// }

// console.log(average([10, 20,30]));

function average(nums) {
    let sum = 0;
    for (item of nums) {
      sum = sum + item;
    }
  
    return sum / nums.length;
  }
  
  console.log(average([10, 20, 30]));
  