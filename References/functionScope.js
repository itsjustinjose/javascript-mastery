//function scope

let age =20;

function person1(){
    let name = 'Justin';
    var age = 29;
    console.log(age);
}

function person2(){
    let name = 'Bijo';
    const age = 25;
    console.log(age);
}

person1();
person2();

console.log(age);