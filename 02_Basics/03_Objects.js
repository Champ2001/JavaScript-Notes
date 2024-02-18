//! Singleton

//! Object Literals

// Store a symbol in an object //! For storing a symbol we have to give the key in square brackets in the object.
const mySymbol = Symbol("key1");

const JsUser = {
    name:"Hitesh",
    age:17,
    "full name":"sarnava mohanta",
    [mySymbol]:"mykey1",
    location:"Jaipur", 
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday "]
}

console.log(JsUser.email)
//! We can also access the object in the form of square brackets 

console.log(JsUser["email"]) // we have to use inverted commas because by default the keys are being stored in the form of string For example name will be stored in the form of "name"

//! Now we have to access full name using the square notations
console.log(JsUser["full name"])

console.log(JsUser[mySymbol])
console.log(JsUser.mySymbol) //!This will give undefined as we have to access the keys through the third brackets only

//! Change Value
JsUser.email="sranva@gmail.com"
//! Freeze the object - now it will not change the value of the object
JsUser.email="sranva@gmail.com"
// Object.freeze(JsUser); //! Freeze the user object
JsUser.email="sranva@.com"
console.log(JsUser)

//! Add greetings 
JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo =function(){
    console.log(`Hello JS user ,${this.name}`)
}

// console.log(JsUser.greeting)//=> Undefined
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 

