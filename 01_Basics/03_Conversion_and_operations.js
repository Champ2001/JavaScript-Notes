let score = "33abc";


let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); // when we convert into number it will get converted into number without any error but when we try to print it , it will give NaN i.e not a number

let check = null;

let covertIntoNumber = Number(check);

console.log(covertIntoNumber);//! It will give 0 when we convert null to a number
//! when we convert undefined to a number then it will again give NaN
//! In case of boolean value 1 for true and 0 for false
//! in case of string it give NaN


//! CONVERTING TO  NUMBER
// "33" => 33
// "33abc" => NaN 
//true => 1; false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//! CONVERTING TO BOOLEAN
// "" => false 
// "sarnava" => true
// 1 => true

//! CONVERTING TO STRING
// 33 => string

// **********OPERATIONS***************

let value = 3;
let negValue = -value
//(2+2) , (2-2), (2**3) ...

//("1" + 2) => 12
//(1 + "2") => 12
//("1" + 2 + 2) => 122
//(1 + 2 + "2") => 32


//! These type of codes are not preferred
// console.log(+true) => 1 
// console.log(true+) => error 
// console.log(+"") => 0 

//! Prefix and Postfix
// ++x and x++ 