//Lexical Scope

function outer() {
    let movie = "Varanam Aaayiram";
    function inner() {
      // let movie = "ishq"
      console.log(movie.toLocaleUpperCase());
  
      function extraInner() {
        console.log(movie.toLocaleUpperCase());
      }
      extraInner();
    }
    console.log(movie);
    inner();
  }
  // inner();
  outer();
  