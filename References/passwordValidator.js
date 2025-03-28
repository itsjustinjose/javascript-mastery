// Password
// function isValidPassword(password, username){
//     if(password.length<8){
//         return false;
//     }
//     if(password.indexOf(' ')!== -1){
//         return false;
//     }
//     if(password.indexOf('username') !== -1){
//         return false;
//     }
//     return true;
// }

// function isValid(password, username) {
//   return (password.length < 8) &&
//     (password.indexOf(" ") !== -1) &&
//     (password.indexOf(username) !== -1);
// }

// console.log(isValid("udemdmbkfb1233", "justin"));

// First define the function
function isValid(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.includes(" ");
    const hasUsername = password.includes(username);
  
    return !(tooShort || hasSpace || hasUsername);
  }
  
  // Then call it
  console.log(isValid("justin@123", "justin"));  // Now works correctly


