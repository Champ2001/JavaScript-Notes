//! Object Literal

const user = {
    username:"hitesh",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("got user details ")
        console.log(`Username: ${this.username}`) //To access the username we should specify which  context we are refering to .Thus we have to use this keyword
    }
}

console.log(user.username)
console.log(user.getUserDetails());
//! Constructor function
const date = new Date() //! Here new is a constructor funtion .Yeh allow karta hai ki ek hi object literal se app multiple instances bana sako 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this //! this is not necessary .Js handles it implicitly
}

const userOne = User("hitesh", 12, true)
const userTwo = User("sarnava", 13, false) //! this code will overwrite the value of userOne also .To prevent from this we should use new keyword


//Correct way
const userOneCorrect = new User("hitesh", 12, true)
const userTwoCorrect = new User("sarnava", 13, false)

console.log(userOne)
console.log(userOneCorrect)
console.log(userOne.constructor) //=> It is a reference of itself [Function: Object]

//! new keyword
// whenever new keyword is created 
//Step 1 -  sabse pehle ek empty object create hota hai jisko instance bola jata hai.
//Step 2 - Uske baad constructor function call hota hai new keyword ke karan aur jitne bhi arguments hai woh uske andar pack karke de deta hai
//Step 3 - this keyword ho hai woh uske andar inject ho jata hai
//Step 4 - hume mil jata hai function ke andar