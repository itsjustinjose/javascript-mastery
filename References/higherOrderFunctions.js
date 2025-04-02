// //Higher Order Functions

// const add = function (x,y) {
//   return x + y;
// };

// function sub(x,y) {
//   return x - y;
// }

// function mult(x,y) {
//   return x * y;
// }

// function div(x,y) {
//   return x / y;
// }

// let calc = [add, sub, mult, div];

// for (let func of calc) {
//   let result = func(2, 4);
//   console.log(result);
// }

function callTwice(func) {
    func();
    func();
  }
  
  function laugh() {
    console.log("Buhahaha");
  }
  
  // callTwice(laugh)
  
  function repeatNTimes(thing, num) {
    for (let i = 0; i < num; i++) {
      thing();
    }
  }
  
  // repeatNTimes(laugh,10);
  
  function happy() {
    console.log("hahahahhahahahhaha");
  }
  
  function randomPick(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand > 0.5) {
      f1();
    } else {
      f2();
    }
  }
  
  randomPick(laugh, happy);
  
  function multipyBy(num) {
    return function (x) {
      return x * num;
    };
  }
  
  const tripple = multipyBy(3);
  const double = multipyBy(2);
  
  console.log(tripple(6));
  console.log(double(8));
  
  function checkNumber(x, y) {
    return function(num){
      return num>=x && num<=y;
    }
  }
  
  const check = checkNumber(10,15);
  
  console.log(check(12))
  