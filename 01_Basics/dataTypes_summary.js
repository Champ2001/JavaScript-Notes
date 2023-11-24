//! Primitive datatypes 
// 7 Types : String, Number , Boolean, null , undefined, Symbol,BigInt 

//Symbol declaration
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //! It is false as every symbol is unique

//BigInt declaration
const bigNumber = 564646464646464646161n



//! Reference Datatypes / Non Primitive Datatypes
// Array , Objects, Functions
const heros = ["shaktiman","naagraj", "superman" ] //Arrays
let ObjectDeclaration = {
    name:"sarnava", 
    age: 22,
};

const myFunction = function(){
    console.log("Hello World");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//! Stack memory(Primitive - we get a copy and the change is not reflected in the original value) , Heap memory(Non - Primitive => We get a reference of the original value)

let yt = "hitesh"
let anotherYt = yt; //we get a copy of the actual file 
anotherYt = "chaiaurcode"

console.log(yt)
console.log(anotherYt)

//!Heap Non Primitive

let userOne = {
    email: "sarnava@email.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com" //! It gets directly changed to both the values of userOne and userTwo

console.log(userOne.email)
console.log(userTwo.email)