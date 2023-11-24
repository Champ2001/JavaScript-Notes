const userEMail = []

if(userEMail){
    console.log("Got User Email")
}
else{
    console.log("Dont have user email")
}

//! Falsy Values - false, 0 , -0, BigInt 0n, "" , null , undefined, NaN .Other than this all others are truthy values 

//! Some Truthy Values - "0", 'false', " " , [], {}, function() .These are some exceptional surprising values 

//* false == 0 => will result in true
//* false == '' => will result in true
//* 0 == '' => will result in true

//! Nullish Coalescing Operator (??) : null , undefined
//Bohot baar aise cases hote hai jaha database se value null aate hai ya toh undefiined aat hai.To agar aur koi value na mile ise toh woh null ya undefined hi assign ho jayega ..but agar value mil gaya toh wohi value assign ho jata hai 

let val1;
let val2;
let val3;

val1 = 5??10 // Yaha use 5 value mil gaya toh assign ho gaya 5
val2 = null ?? 10 //Yaha pehle null aaya toh check kiya ki aur koi value assign kar sakta hoon kya .Fir 10 assign ho gaya
val3 = undefined ?? 10 ?? 20 //Yaha 10 assign ho jayega

console.log(val1)
console.log(val2)
console.log(val3)

//! Ternary Operator
//condition ? true : false 