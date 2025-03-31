//block scope

function doubleArr(arr) {
    let result = [];
    for (num of arr) {
      let double = num * 2;
      result.push(double);
    }
    console.log(double);
    return result;
  }
  
  console.log(doubleArr([1,2,3]));
  